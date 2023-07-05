import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import sql from "$lib/db"
import bcrypt from "bcrypt"
import { API_KEY_PREFIX } from "$env/static/private";

function generate_random_api_key(length: number) {
    for (var s = ''; s.length < length; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random() * 62 | 0));
    return s;
}

export const load: PageServerLoad = async ({ locals }) => {
    const { user } = locals
    const { rows } = await sql<{
        id: string,
        name: string,
        key: string,
        owner: string,
        project: string,
        created_at: string,
        permissions: string
    }>
        ` select * from api_key where owner=${user.id} `
    const projects = await sql<{ name: string, id: string }>` select * from project where owner=${user.id} `
    return {
        keys: rows,
        projects: projects.rows
    }
}

export const actions: Actions = {
    create_key: async ({ locals, request }) => {
        const { user } = locals
        const data = await request.formData()
        const key_name = data.get("name") as string
        const project = data.get("project") as string
        const permissions = data.get("permissions") as string
        const key_id = crypto.randomUUID()
        const api_key = generate_random_api_key(15)
        const hashed_key = await bcrypt.hash(api_key, 10)
        const key_to_be_inserted = `${API_KEY_PREFIX}_${key_id}`
        await sql` 
            insert into api_key(id, name, key, owner, project, permissions) 
            values ( ${key_to_be_inserted}, ${key_name}, ${hashed_key}, ${user.id}, ${project}, ${permissions} ) 
        `
        return {
            success: true,
            key: `${key_id}$${api_key}`
        }
    }
}
