import type { LayoutServerLoad } from "./$types";
import sql from "$lib/db"

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = locals
  const notifications = await sql<{ id:string, type:"notification"|"invitation", read:boolean, invitation:string }>` select * from notification where read=${false} `
  console.log(notifications)
  return {
    user,
    notifications
  }
}
