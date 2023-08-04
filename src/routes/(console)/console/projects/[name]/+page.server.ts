import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = locals
  const { name } = params
  const [project] = await sql<{ id: string }[]>` select id from project where name=${name} and owner=${user.id} `
  if (!project) {
    throw redirect(301, "/console/projects")
  }
  const entities = await sql<{ name: string, project: string, schema: Record<string, string>, trashed: boolean }[]>` select * from entity where project=${project.id} and trashed=false `
  return {
    entities,
    name
  }
}

export const actions: Actions = {
  create_entity: async ({ request, locals }) => {
    try {
      const { user } = locals
      const data = await request.formData()
      const entity_name = data.get("name") as string
      const project_name = data.get("project") as string
      let entity_schema: Record<string, string> = {}
      const schema = JSON.parse(data.get("schema") as string) as [{ name: string, type: string }]
      for (const { name, type } of schema) {
        entity_schema[name] = type
      }
      const [project] = await sql<{ id: string }[]>` select id from project where name=${project_name} and owner=${user.id} `
      if (!project) {
        return fail(404)
      }
      await sql`
        INSERT INTO entity(name, project, schema)
        values( ${entity_name}, ${project.id}, ${JSON.stringify(entity_schema)} )
      `
    } catch (err) {
      console.log(err)
      return fail(500)
    }
  }
}
