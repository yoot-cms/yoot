import type { RequestHandler } from "./$types";
import { HttpResponse, verify_token } from "$lib";
import sql from "$lib/db"

export const POST : RequestHandler = async ({ request })=>{
    try {
        const token = request.headers.get("Authorization") ?? ""
        if (token === "") return HttpResponse(401)
        const { status } = verify_token(token)
        if (!status) return HttpResponse(401)
        const { target_project, id, name } = await request.json() as { target_project: string, id:string, name:string }
        const { rowCount } = await sql` SELECT name FROM entities WHERE name=${name} `
        if(rowCount!==0) return HttpResponse(409)
        await sql` UPDATE entities set project=${target_project} WHERE id=${id} `
        return HttpResponse(200)
    } catch (err) {
        console.log(err)
        return HttpResponse(500)
    }
}

