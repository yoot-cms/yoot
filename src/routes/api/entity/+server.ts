import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import { verify_token, HttpResponse } from "$lib";

export const POST = (
    async ({ request }) => {
        try {
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return HttpResponse(401)
            const { status } = verify_token(token)
            if (!status) return HttpResponse(401)
            const { name, project, schema } = await request.json() as { name: string, project: string, schema: Record<string, string> }
            const { rowCount } = await sql` select name from entity where  project=${project} AND name=${name}`
            if(rowCount!==0) return HttpResponse(409)
            await sql` INSERT INTO entity(name, project, schema) values(${name}, ${project}, ${JSON.stringify(schema)}) `
            return HttpResponse(201)
        } catch (err) {
            console.log(err)
            return HttpResponse(500)
        }
    }
) satisfies RequestHandler
