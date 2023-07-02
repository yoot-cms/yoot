import { redirect, type Actions, fail, error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load : PageServerLoad = async ({ locals, params })=>{
    const { user_id } = locals
    if(!user_id){
        throw redirect(301, "/login")
    }
    const { name } = params
    const { rows:[project], rowCount } = await sql<{ id:string }>` select id from project where name=${name} and owner=${user_id} `
    if(rowCount===0){
        throw redirect(301, "/console/projects")
    }
    const { rows } = await sql<{ name:string, project:string, schema:Record<string, string> }>` select * from entity where project=${project.id} `
    return {
        entities: rows,
        name
    }
}

export const actions : Actions = {
    create_entity: async ({ request, locals })=>{
        try {
            const { user_id } = locals
            const data = await request.formData()
            const entity_name = data.get("name") as string
            const project_name = data.get("project") as string
            let entity_schema : Record<string, string> = {}
            const schema = JSON.parse(data.get("schema") as string) as [{name:string, type:string}]
            for (const { name, type } of schema ){
                entity_schema[name]=type
            }
            const { rows:[project], rowCount } = await sql<{id:string}>` select id from project where name=${project_name} and owner=${user_id} `
            if(rowCount===0){
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
