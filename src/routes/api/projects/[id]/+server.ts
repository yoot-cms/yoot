import type { RequestHandler } from "./$types";
import { verify_token } from "$lib";
import sql from "$lib/db";

export const PUT = (
     async ({request, params})=>{
        try {
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return new Response("", { status: 401 })

            const { status } = verify_token(token)
            if (!status) return new Response("", { status: 401 })
            const {id} = params
            const { name } = await request.json() as { name: string }
            const {rowCount} = await sql`select name from project where name = ${name}`
            if (rowCount!==0) {
                return new Response("", {status : 409})
            }
            await sql`
                UPDATE project
                SET name = ${name}
                WHERE id = ${id}
            `
            return new Response("");

        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler



export const DELETE = (
     async ({request, params})=>{
        try {
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return new Response("", { status: 401 })

            const { status } = verify_token(token)
            if (!status) return new Response("", { status: 401 })
            const {id} = params
            await sql`
                DELETE FROM project
                WHERE id = ${id}   
            `
            return new Response("");

        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler




