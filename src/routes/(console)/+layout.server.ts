import type { LayoutServerLoad } from "./$types";
import sql from "$lib/db"

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = locals
  const notifications = await sql<{ 
    id: string, 
    type: "notification" | "invitation", 
    read: boolean, 
    invitation: string, 
    notifiee: string,
    message:string
  }[]>` select * from notification where read=${false} and notifiee=${user.id}`
  return {
    user,
    notifications
  }
}
