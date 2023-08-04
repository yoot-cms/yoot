import type { LayoutServerLoad } from "./$types";
import sql from "$lib/db"

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = locals
  const { rows } = await sql<{ id:string, type:"notification"|"invitation", read:boolean, invitation:string }>` select * from notification where read=${false} `
  console.log(rows)
  const notifications = rows
  return {
    user,
    notifications
  }
}
