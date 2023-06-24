import { HttpResponse } from "$lib";
import type { RequestHandler } from "./$types";
import { verify_token } from "$lib";
import sql from "$lib/db"

export const GET : RequestHandler = async ({ request })=>{
    try {
        const token = request.headers.get("Authorization") ?? ""
        if (token === "") return HttpResponse(401)
        const { status, id } = verify_token(token)
        if (!status) return HttpResponse(401)
        const { rows, rowCount } = await sql` SELECT username, email FROM users WHERE id=${id} `
        if(rowCount===0) return HttpResponse(401)
        return HttpResponse(200, JSON.stringify({ data: rows[0] }))
    } catch (err) {
        console.log(err)
        return HttpResponse(500)
    }
}
