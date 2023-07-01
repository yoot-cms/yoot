import { redirect, type Actions } from "@sveltejs/kit";
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
    const { rows } = await sql` select * from entity where project=${project.id} `
    return {
        entities: rows,
        name
    }
}

export const actions : Actions = {
}
