import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import bcrypt from "bcrypt"

export const POST = (
    async ({ request })=>{
        try {
            const { email, password } = await request.json() as { email:string, password:string }
            const { rows } = await sql<{password:string}>` select password from users where email=${email} `
            if(rows.length===0) return new Response("", { status:400 })
            const [user] = rows
            const password_is_valid = await bcrypt.compare(password, user.password)
            if(!password_is_valid) return new Response("", { status:400 })
            return new Response("")
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler
