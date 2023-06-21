import type { RequestHandler } from "./$types";
import { HttpResponse, verify_token } from "$lib";
import sql from "$lib/db"

export const GET = (
     async ({request})=>{
        try {
            const token = request.headers.get("Authorization") ?? ""
            if ( token === "" ) return new Response("", { status: 401 })
            const { status, id } = verify_token(token)
            if ( !status ) return new Response("", { status: 401 })
            const  projects  = await sql ` select count(*) from project where owner = ${id}`
            const entities = await sql `
            SELECT e.*
            FROM entity e
            JOIN project p ON e.project = p.id
            JOIN users u ON p.owner = u.id
            WHERE u.id = ${id};
             `
            const proj_num = projects.rowCount
            const ent_num = entities.rowCount

            const entities_per_project_count = await sql ` 
            SELECT  COUNT(e.id) AS entity_count
            FROM project p
            JOIN entity e ON p.id = e.project
            JOIN users u ON p.owner = u.id
            WHERE u.id = ${id}
            GROUP BY p.id;
            `
            const entities_per_project = entities_per_project_count.rowCount

            const list = {
                projects: proj_num,
                entities : ent_num,
                entities_per_project:[{
                        id : entities_per_project
                }]
            }
            return HttpResponse(200, JSON.stringify({data : list}))
        } catch (err) {
            console.log(err)
            return new Response("", { status:500 })
        }
    }
) satisfies RequestHandler