import type { Actions } from "@sveltejs/kit";
import sql from "$lib/db"

export const actions = {
    default: async ({ request })=>{
        const data = await request.formData()
        const email = data.get("email")!
        const username = data.get("username")!
        const password = data.get("password")!
        console.log(email, username, password)
        return {
            error: "nothing"
        }


    }    
} satisfies Actions
