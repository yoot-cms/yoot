import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load : PageServerLoad = async ({ locals })=>{
    const { user_id } = locals
    if(!user_id){
        throw redirect(301, "/login")
    }
    const { rows : [user] } = await sql<{ username:string}>`select username from users where id=${user_id}`
    return {
        user
    }
}
