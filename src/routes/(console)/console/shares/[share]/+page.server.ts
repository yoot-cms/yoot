import type { PageServerLoad } from "./$types";
import sql from "$lib/db";
import { redirect } from "@sveltejs/kit";
type Entity = {
  id: string,
  name: string,
  schema: Record<string, string>,
  trashed: boolean
}

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = locals
  const { share } = params
  const [targetted_share]: { id: string, project: string, sharee: string, sharer: string, sharer_email:string, project_name:string }[] = await sql`
    select shares.id, shares.project, shares.sharee, shares.sharer, users.email AS sharer_email, project.name AS project_name
    FROM shares
    JOIN users ON shares.sharer = users.id
    JOIN project on shares.project = project.id
    WHERE shares.id=${share}
  `
  if (!targetted_share) {
    throw redirect(301, "/console/shares")
  }
  const { project, sharee } = targetted_share
  if (sharee !== user.id) {
    throw redirect(301, "/console/shares")
  }
  const entities: Entity[] = await sql`select * from entity where project=${project}`
  return {
    entities,
    share,
    sharer_email:targetted_share.sharer_email,
    project_name: targetted_share.project_name
  }
}
