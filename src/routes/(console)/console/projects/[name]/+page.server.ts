import type { PageServerLoad } from "./$types";
import sql from "$lib/db"
import { redirect } from "@sveltejs/kit";

export const load : PageServerLoad = async ({ params, locals })=>{
    const { user_id } = locals
    if(!user_id){
        throw redirect(301, "/login")
    }
    const { name } = params
    const { rowCount, rows:[project] } = await sql<{id:string}>` select id from project where name=${name} and owner=${user_id} `
    if(rowCount===0){
        throw redirect(301, "/console/projects")
    }
    const { rows } = await sql<{ id:string, project:string, name:string, schema:Record<string, string> }>` select * from entity where project=${project.id} `
    return {
        entities: rows,
        name
    }
}
