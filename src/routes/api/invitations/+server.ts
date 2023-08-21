import type { RequestHandler } from "./$types";
import sql from "$lib/db";

export const GET: RequestHandler = async ({ request, locals }) => {
  try {
    const { user } = locals
    const queries = new URL(request.url)
    const token = queries.searchParams.get('token')
    if (!token) {
      return new Response("Invitation token not found", { status: 400 })
    }
    const [targetted_token] = await sql<{ id: string, project: string, inviter:string, invitee: string, expired: boolean }[]>`select * from invitation_links where link=${token}`
    if (!targetted_token) {
      return new Response("Invalid invitation token", { status: 404 })
    }
    if (targetted_token.expired) {
      return new Response("Invitation expired. Please ask a new link", { status: 400 })
    }
    if(targetted_token.invitee!==user.id){
      return new Response("This invitation was not sent to you", { status:401 })
    }
    await sql` 
      insert into shares(project, sharee, sharer, permissions) 
      values( ${targetted_token.project}, ${targetted_token.invitee}, ${targetted_token.inviter}, ${""} )
    `
    await sql` update invitation_links set expired=${true} where id=${targetted_token.id} `
    return new Response("You acceted the invitation.")
  } catch (err) {
    console.log(`Error during invitation handling: ${err}`)
    return new Response("", { status: 500 })
  }
}
