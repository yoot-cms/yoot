import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import { verify_token, HttpResponse } from "$lib";

export const PUT = (
    async ({ request, params }) => {
        try{
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return HttpResponse(401)
            const { status } = verify_token(token)
            if (!status) return HttpResponse(401)
            const { id } = params
            const { name } = await request.json() as { name : string }
            const { rowCount } = await sql` select name from entity where name=${name} `
            if(rowCount!==0) return HttpResponse(409)
            await sql` UPDATE entity set name=${name} where id=${id} `
            return HttpResponse(200)
        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler

export const DELETE = (
    async ({ request, params }) => {
        try{
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return HttpResponse(401)
            const { status } = verify_token(token)
            if (!status) return HttpResponse(401)
            const { id } = params
            await sql` DELETE from entity where id=${id} `
            return HttpResponse(200)
        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler
