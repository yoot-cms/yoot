import type { RequestHandler } from "./$types";
import { HttpResponse } from "$lib";
import { verify_token } from "$lib";
import sql from "$lib/db"

export const GET = (
     async ({ request, params })=>{
        try {
            const token = request.headers.get("Authorization") ?? ""
            if ( token === "" ) return HttpResponse(401)
            const { status } = verify_token(token)
            if ( !status ) return HttpResponse(401)

            const { id } = params
            const { rows } = await sql `SELECT * FROM entity WHERE project = ${id}`
            return HttpResponse(200, JSON.stringify({ data: rows }))
        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler