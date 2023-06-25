import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import kv from "$lib/kv"
import bcrypt from "bcrypt"
import { HttpResponse } from "$lib";

export const POST = (
    async ({ request }) => {
        try {
            const { email, password } = await request.json() as { email: string, password: string }
            const { rows, rowCount } = await sql<{ id: string, password: string }>` 
                    select id, password from users 
                    where email=${email} 
                `
            if ( rowCount === 0 ) return HttpResponse(400)
            const [ user ] = rows
            const password_is_valid = await bcrypt.compare(password, user.password)
            if ( !password_is_valid ) return HttpResponse(400)
            const session_id = crypto.randomUUID()
            await kv.set(session_id, user.id)
            return new Response(JSON.stringify({ session_id }))
        } catch (err) {
            console.log(err)
            return new Response("", { status: 500 })
        }
    }
) satisfies RequestHandler
