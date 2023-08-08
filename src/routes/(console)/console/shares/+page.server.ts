import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import sql from "$lib/db";

type Share = {
  id: string
  project: string
  sharee: string
  sharer: string
}

export const load: PageServerLoad = async ({ locals })=>{
  try {
    const { user } = locals
    const shares = await sql<Share[]>` select * from shares where sharee=${user.id} or sharer=${user.id}`
    console.log(shares)
    return {
      shares
    }
  } catch (err) {
    console.log(`Error while fetching shares`)
    return fail(500)
  }
}
