import type { PageServerLoad } from "./$types";
import sql from "$lib/db";

type Share = {
  share_id: string
  project_name: string
  project_owner: string
  is_sharer: boolean
}

export const load: PageServerLoad = async ({ locals }) => {
  const { user } = locals
  const shares: Share[] = await sql`
      SELECT
        s.id AS share_id,
        s.permissions AS share_permissions,
        p.name AS project_name,
        u.id AS project_owner,
        CASE WHEN u.id = ${user.id} THEN true ELSE false END AS is_sharer
      FROM
        shares AS s 
      JOIN
        project AS p ON s.project = p.id
      JOIN
        users AS u ON p.owner = u.id
      WHERE s.sharee=${user.id} or s.sharer=${user.id}
    `
  return {
    shares
  }
}
