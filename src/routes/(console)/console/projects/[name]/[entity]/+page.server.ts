import type { PageServerLoad } from "./$types";
import { type Actions, redirect } from "@sveltejs/kit";
import sql from "$lib/db"

type Entity = {
    id: string,
    name: string,
    schema: Record<string, string>,
    trashed: boolean
}

type Entry = {
    id: string,
    entity: string,
    value: Record<string, string>
}

export const load: PageServerLoad = async ({ locals, params }) => {
    const { user } = locals
    const { name, entity } = params
    const { rows:[project] } = await sql<{id:string}>`select id from project where owner=${user.id} and name=${name}`
    if(!project) throw redirect(301, '/console/projects')
    const { rows:[entity_data] } = await sql<Entity>` select * from entity where name=${entity} and project=${project.id} `
    if(!entity_data) throw redirect(301, `/console/projects/${name}`)
    const { rows } = await sql<Entry>` select * from entry where entity=${entity_data.id} `
    return {
        project_name: name,
        entity_name: entity,
        entity: entity_data,
        entries: rows
    }
}

export const actions: Actions = {
    create_entry: async ({ request, locals }) => {
        const data = await request.formData()
        const entry_value = data.get("entry_value")! as string
        const entry = JSON.parse()
    }
}
