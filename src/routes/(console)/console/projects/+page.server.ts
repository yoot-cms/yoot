import { redirect, type Actions, fail } from "@sveltejs/kit";
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

export const actions : Actions = {
    create: async ({ request, locals })=>{
        const { user_id } = locals
        if(!user_id){
            redirect(301, "/login")
        }
        const data = await request.formData()
        const name  = data.get("name")! as string
        const { rowCount } = await sql` select name from project where owner=${user_id} and name=${name} `
        if(rowCount!==0){
            return fail(400, { error:"Duplicate value error" })
        }
        await sql` insert into project(name, owner) values( ${name}, ${user_id} ) `
        return {
            success: true
        }
    }
}
