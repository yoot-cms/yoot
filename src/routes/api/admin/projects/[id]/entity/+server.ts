import type { RequestHandler } from "./$types";
import { HttpResponse } from "$lib";
import { verify_token } from "$lib";
import sql from "$lib/db"

export const GET = (
     async ({ request, params})=>{
        try {
            
            const {id} = params
            const {rows} = await sql `SELECT * FROM entity WHERE project = ${id}`
            return HttpResponse(200, JSON.stringify({ data: rows }))
            
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler