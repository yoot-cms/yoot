import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load : PageServerLoad = async ({ locals })=>{
    const { user_id } = locals
    if(!user_id){
        throw redirect(301, "/login")
    }
    const { rows } = await sql<{ id:string, name:string }>`select * from project where owner=${user_id}`
    return {
        projects: rows
    }
}

export const actions : Actions = {
    create: async ({ locals, request })=>{
        try {
            const { user_id } = locals
            if(!user_id){
                throw redirect(301, "/login")
            }
            const data = await request.formData()
            const name = data.get("name")! as string
            const { rowCount } = await sql`select name from project where name=${name} and owner=${user_id}`
            if(rowCount!==0){
                return fail(400, { message:`You already have a project named ${name}`, name })
            }
            await sql` insert into project(name, owner) values( ${name}, ${user_id} )`
            return {
                name
            }
        } catch (error) {
            console.log(error)
            return fail(500)
        }
    }
}
