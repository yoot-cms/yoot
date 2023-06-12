import type { RequestHandler } from "./$types";
import { verify_token } from "$lib";
import sql from "$lib/db"

export const PUT = (
    async ({ request } ) => {
        try {
            const token = request.headers.get("Authorization") ?? ""
            if( token==="" ) return new Response("", { status : 401 })
            const { id, status } = verify_token(token)
            if( !status ) return new Response("", { status : 401 })
            const { username } = await request.json() as { username : string }
            await sql`
                update users 
                set username=${username}
                where id=${id}
            `
            return new Response("")
        } catch (err) {
            console.log(err)
            return new Response("", { status : 500 })
        }
    }
) satisfies RequestHandler

