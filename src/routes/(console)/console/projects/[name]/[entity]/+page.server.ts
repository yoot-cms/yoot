import type { PageServerLoad } from "./$types";
import { redirect, type Actions } from "@sveltejs/kit";

export const load : PageServerLoad = async ({ locals, params })=>{
    if(!locals.user_id){
        throw redirect(301, "/login")
    }
    const { name, entity } = params
    return {
        name, entity
    }

}

export const actions : Actions = {
    create_entry : async ({})=>{

    }
}
