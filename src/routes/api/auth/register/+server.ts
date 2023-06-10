import type { RequestHandler } from "./$types";
import sql from "$lib/db"
import bcrypt from "bcrypt"

export const POST = (
    async ({ request })=>{
        try {
            const { email, password } = await request.json() as { email:string, password:string }
            const result = await sql`select email from users where email=${email}`
            if(result.rows.length!==0) return new Response("", { status:409 })
            const hashed_pwd = await bcrypt.hash(password, 10)
            await sql`insert into users(email, password) values(${email}, ${hashed_pwd})`
            return new Response("")
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler

