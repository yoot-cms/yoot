import type { RequestHandler } from "./$types";
import sql from "$lib/db"

export const GET = (
     async ()=>{
        try {
            const { rows } = await sql` select * from users `
            return new Response(JSON.stringify({ data: rows }), { headers:{
                "Content-Type":"application/json"
            } })
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler
