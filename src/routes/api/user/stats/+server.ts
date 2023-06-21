import type { RequestHandler } from "./$types";
import { HttpResponse, verify_token } from "$lib";
import sql from "$lib/db"

export const GET = (
    async ({ request }) => {
        try {
            const token = request.headers.get("Authorization") ?? ""
            if (token === "") return new Response("", { status: 401 })
            const { status, id } = verify_token(token)
            if (!status) return new Response("", { status: 401 })

            const projects = await sql<{ id: string }>` select id from project where owner=${id} `
            const total_projects = projects.rowCount
            let total_entities = 0
            let entities_per_project = []
            for (let i = 0; i < projects.rows.length; i++) {
                const { id } = projects.rows[i];
                const { rowCount } = await sql` select * from entity where project=${id} `
                total_entities += rowCount
                let entry : Record<string, number> = {}
                entry[`${id}`] = rowCount
                entities_per_project.push( entry )
            }
            const response = {
                entities: total_entities,
                projects: total_projects,
                entities_per_project
            }
            return HttpResponse(200, JSON.stringify({ data: response }))
        } catch (err) {
            console.log(err)
            return new Response("", { status: 500 })
        }
    }
) satisfies RequestHandler
