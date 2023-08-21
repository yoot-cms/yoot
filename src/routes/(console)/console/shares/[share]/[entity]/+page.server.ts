import type { PageServerLoad } from "./$types";
import sql from "$lib/db";
import { redirect } from "@sveltejs/kit";
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

export const load: PageServerLoad = async ({ locals: { user }, params }) => {
  const { share, entity } = params
  const [targetted_share]: { sharee: string, project: string, sharer: string, project_name:string }[] = await sql` 
    SELECT shares.sharee, shares.project, shares.sharer, users.email AS sharer, project.name AS project_name
    FROM shares
    JOIN users ON shares.sharer = users.id
    JOIN project ON shares.project = project.id
    WHERE shares.id = ${share}
  `
  if (!targetted_share) throw redirect(301, '/console/shares')
  if (user.id !== targetted_share.sharee) throw redirect(301, '/console/shares')
  const [{ id, schema, name }] = await sql<Entity[]>`select id, schema, name from entity where name=${entity} and project=${targetted_share.project}`
  if (!id) throw redirect(301, '/console/shares')
  const entries = await sql<Entry[]>`select * from entry where entity=${id} `
  return {
    entries,
    schema,
    sharer:targetted_share.sharer,
    project:targetted_share.project_name,
    entity:name,
    share
  }
}
