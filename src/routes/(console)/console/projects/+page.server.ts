import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { sql } from "@vercel/postgres";
export const ssr = false

export const load: PageServerLoad = async ({ locals }) => {
    const { user_id } = locals
    if(!user_id){
        redirect(301, "/login")
    }
    const { rows } = await sql<{ id:string, name:string }>` select id, name from project where owner=${user_id} `
    return {
        data: rows
    }

} 
