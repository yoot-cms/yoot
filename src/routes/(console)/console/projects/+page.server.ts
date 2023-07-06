import { type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db"

export const load: PageServerLoad = async ({ locals }) => {
    const { user } = locals
    const { rows } = await sql<{ id: string, name: string, trashed: boolean }>`select * from project where owner=${user.id} and trashed=false`
    return {
        projects: rows
    }
}

export const actions: Actions = {
    create: async ({ locals, request }) => {
        try {
            const { user } = locals
            const data = await request.formData()
            const name = data.get("name")! as string
            const { rowCount } = await sql`select name from project where name=${name} and owner=${user.id}`
            if (rowCount !== 0) {
                return fail(400, { message: `You already have a project named ${name}`, name })
            }
            await sql` insert into project(name, owner) values( ${name}, ${user.id} )`
            return {
                name
            }
        } catch (error) {
            console.log(error)
            return fail(500)
        }
    }
}
