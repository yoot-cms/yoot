import type { PageServerLoad } from "./$types";
import { type Actions, redirect, fail } from "@sveltejs/kit";
import sql from "$lib/db"
import { writeFileSync, readFileSync, unlinkSync } from "fs"
import { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT } from "$env/static/private";
import Imagekit from 'imagekit';
const imagekit = new Imagekit({
  privateKey: IMAGEKIT_PRIVATE_KEY,
  publicKey: IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT
});

type Entity = {
  id: string,
  name: string,
  schema: Record<string, string>,
  trashed: boolean
}

type Entry = {
  id: string,
  entity: string,
  value: Record<string, string>
}

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = locals
  const { name, entity } = params
  const { rows: [project] } = await sql<{ id: string }>`select id from project where owner=${user.id} and name=${name}`
  if (!project) throw redirect(301, '/console/projects')
  const { rows: [entity_data] } = await sql<Entity>` select * from entity where name=${entity} and project=${project.id} `
  if (!entity_data) throw redirect(301, `/console/projects/${name}`)
  const { rows } = await sql<Entry>` select * from entry where entity=${entity_data.id} `
  return {
    project_name: name,
    entity_name: entity,
    entity: entity_data,
    entries: rows
  }
}

export const actions: Actions = {
  create_entry: async ({ request }) => {
    try {
      const data = await request.formData()
      const fields = JSON.parse(data.get('fields')! as string) as [string, string][]
      const entity = data.get('entity')! as string
      let entry_value: Record<string, string | number | boolean> = {};
      await Promise.all(
        fields.map(async ([field_name, field_type]) => {
          if (field_type === 'Text') {
            entry_value[field_name] = data.get(field_name)! as string;
          }
          if (field_type === 'Number') {
            const value = data.get(field_name)! as string;
            entry_value[field_name] = Number(value);
          }
          if (field_type === 'Image') {
            const file = data.get(field_name)! as File;
            const file_extension = file.type.split("/")[1]! as string;
            const form_data = new FormData()
            form_data.append('file_extension', file_extension)
            form_data.append('file_data', file)
            await fetch(
              'http://localhost:3000',
              {
                method: "POST",
                body: form_data
              }
            ).then(async res => {
              const { url } = await res.json() as { url:string }
              console.log(url)
              entry_value[field_name] = url
            }).catch(err => { 
              console.log('Error while posting file to media server')
              console.log(err)
              return fail(500)
            })
          }
          if (field_type === 'Boolean') {
            const value = data.get(field_name)! as string;
            entry_value[field_name] = value === 'on' ? true : false;
          }
        })
      )
      await sql` insert into entry(entity, value) values( ${entity}, ${JSON.stringify(entry_value)} ) `
    } catch (err) {
      console.log('Error creating entry')
      console.log(err)
      return fail(500)
    }
  }
}
