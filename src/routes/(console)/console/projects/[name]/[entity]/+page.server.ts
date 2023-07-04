import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";

export const load : PageServerLoad = async ({ locals, params })=>{
    const { name, entity } = params
    return {
        name, entity
    }

}

export const actions : Actions = {
    create_entry : async ({})=>{

    }
}
