import type { PageServerLoad } from "./$types";
import { type Actions, redirect } from "@sveltejs/kit";
import sql from "$lib/db"
import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_API_KEY, CLOUDINARY_NAME, CLOUDINARY_API_SECRET } from "$env/static/private";

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
    const { rows:[project] } = await sql<{id:string}>`select id from project where owner=${user.id} and name=${name}`
    if(!project) throw redirect(301, '/console/projects')
    const { rows:[entity_data] } = await sql<Entity>` select * from entity where name=${entity} and project=${project.id} `
    if(!entity_data) throw redirect(301, `/console/projects/${name}`)
    const { rows } = await sql<Entry>` select * from entry where entity=${entity_data.id} `
    return {
        project_name: name,
        entity_name: entity,
        entity: entity_data,
        entries: rows
    }
}

export const actions: Actions = {
    create_entry: async ({ request, locals }) => {
        const form_data = await request.formData()
        const entity = JSON.parse(form_data.get("entity")! as string) as Entity
        console.log(entity)
        const data = Object.entries(form_data)
        console.log(data)
        // cloudinary.config({
        //     cloud_name:CLOUDINARY_NAME,
        //     api_key:CLOUDINARY_API_KEY,
        //     api_secret:CLOUDINARY_API_SECRET
        // })
        // const upload_result = await cloudinary.uploader.upload("")
    }
}
