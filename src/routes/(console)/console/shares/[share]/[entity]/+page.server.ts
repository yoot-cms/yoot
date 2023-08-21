import type { PageServerLoad } from "./$types";
import sql from "$lib/db";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals: { user }, params }) => {
  const { share, entity } = params
  const [targetted_share]: { sharee: string, project: string }[] = await sql` select sharee, project from shares where id=${share}`
  if (!targetted_share) {
    return redirect(301, '/console/shares')
  }
  if (user.id !== targetted_share.sharee) {
    return redirect(301, '/console/shares')
  }
  const [targetted_entity]: { id: string }[] = await sql`select id from entity where name=${entity} and project=${targetted_share.project}`
  if(!targetted_entity){
    return redirect(301, '/console/shares')
  }
  const entries = await sql`select * from entry where entity=${targetted_entity.id} `
  return {
    entries
  }
}
