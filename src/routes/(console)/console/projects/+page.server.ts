import { redirect, type Actions, type Page } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load : PageServerLoad = async ({ locals })=>{
    const { user_id } = locals
    console.log(user_id)
    if(!user_id){
        throw redirect(301, "/login")
    }
    const { rows } = await sql<{ id:string, name:string }>`select * from project where owner=${user_id}`
    return {
        projects: rows
    }
}

export const actions : Actions = {
    default: async ({ locals, request })=>{
        const { user_id } = locals
        if(!user_id){
            throw redirect(301, "/login")
        }
        const data = await request.formData()
    }
}
