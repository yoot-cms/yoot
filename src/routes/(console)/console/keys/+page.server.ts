import type { PageServerLoad } from "./$types";
import { redirect, type Actions, error } from "@sveltejs/kit";
import sql from "$lib/db"

export const load: PageServerLoad = async ({ locals }) => {
    const { user_id } = locals
    if (!user_id) {
        throw redirect(301, "/login")
    }
    const { rows } = await sql<{
        id: string,
        name: string,
        key: string,
        owner: string,
        project: string,
        entities: string[],
        created_at: string
    }>
        ` select * from api_key where owner=${user_id} `
    const projects = await sql<{ name: string, id: string }>` select * from project where owner=${user_id} `
    return {
        keys: rows,
        projects: projects.rows
    }
}

export const actions: Actions = {
    create_key: async ({ locals, request }) => {
        const data = await request.formData()
        const key_name = data.get("name") as string
        const project = data.get("project") as string
        const permissions = data.get("permissions") as string
        return {
            key: "duh"
        }
    }
}
