import type { RequestHandler } from "./$types";
import * as jwt from "jsonwebtoken"
import sql from "$lib/db";

type Invitation = {
  id: string
  project: string
  invitee: string
}

export const GET: RequestHandler = async ({ request, params, locals }) => {
  try {
    console.log(locals.user)
    const queries = new URL(request.url)
    const token = queries.searchParams.get('token')
    if (!token) {
      return new Response("Invitation token not found", { status: 400 })
    }
    const invitation_data = jwt.decode(token) as Invitation
    return new Response()
  } catch (err) {
    return new Response("", { status: 500 })
  }
}
