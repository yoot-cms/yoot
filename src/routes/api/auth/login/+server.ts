import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { JWT_SECRET } from "$env/static/private";

export const POST = (
    async ({ request }) => {
        try {
            const { email, password } = await request.json() as { email: string, password: string }
            const { rows } = await sql<{ id: string, password: string }>` 
                    select id, password from users 
                    where email=${email} 
                `
            if ( rows.length === 0 ) return new Response("", { status: 400 })
            const [ user ] = rows
            const password_is_valid = await bcrypt.compare(password, user.password)
            if ( !password_is_valid ) return new Response("", { status: 400 })
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "31 d" })
            return new Response(JSON.stringify({ token }), { headers: { "Content-Type": "application/json" } })
        } catch (err) {
            console.log(err)
            return new Response("", { status: 500 })
        }
    }
) satisfies RequestHandler
