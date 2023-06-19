import type { RequestHandler } from "./$types";
import { HttpResponse } from "$lib";
import sql from "$lib/db"

export const GET = (
     async ({ params})=>{
        try {
            
            const { id } = params
            const { rows } = await sql `SELECT * FROM entity WHERE project = ${id}`
            return HttpResponse(200, JSON.stringify({ data: rows }))
            
        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler
