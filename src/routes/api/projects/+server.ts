import type { RequestHandler } from "./$types";
import { verify_token } from "$lib";
import { sql } from "@vercel/postgres";

export const POST = (
     async ({ request })=>{
        try {
            const token = request.headers.get("Authorization") ?? ""
            if( token==="" ) return new Response("", { status : 401 })
            const { id, status } = verify_token(token)
            if(!status) return new Response("", { status:401 })
            const { name } = await request.json() as { name : string }
            const { rowCount } = await sql`select name from project where name = ${name}`
            if ( rowCount !== 0 ) {
                return new Response("", {status : 409})
            }
            await sql`
                insert into project(name, owner)
                values(${name}, ${id})
            `
            return new Response("", {status : 201})
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler


export const GET = (
     async ()=>{
        try {
            const { rows } = await sql` select * from project `
            return new Response(JSON.stringify({ data: rows }), { headers:{
                "Content-Type":"application/json"
            } })
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler
