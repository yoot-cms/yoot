import type { PageServerLoad } from "./$types";
import sql from "$lib/db";
import { redirect } from "@sveltejs/kit";
type Entity = {
  id: string,
  name: string,
  schema: Record<string, string>,
  trashed: boolean
}

export const load: PageServerLoad = async ({ locals, params })=>{
  const { user } = locals
  const { share } = params
  const [targetted_share] : {id:string, project:string, sharee:string, sharer:string }[] = await sql`select * from shares where id=${share}`
  if(!targetted_share){
    throw redirect(301, "/console/shares")
  }
  const { project, sharee } = targetted_share
  if(sharee!==user.id){
    throw redirect(301, "/console/shares")
  }
  const entities : Entity[] = await sql`select * from entity where project=${project}`
  console.log(share, "share")
  return {
    entities,
    share
  }
}
