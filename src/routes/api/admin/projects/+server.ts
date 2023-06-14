import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import { HttpResponse } from "$lib";

export const GET = (
     async ()=>{
        try {
            const{ rows } = await sql `select * from project`
            return HttpResponse(200, JSON.stringify({ data: rows }))

        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler
