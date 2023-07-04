import { redirect, type Handle } from "@sveltejs/kit";
import kv from "$lib/kv"
import type { User } from "./app";

export const handle: Handle = async ({ event, resolve }) => {
    console.log(event.url.pathname)
    if (event.url.pathname.startsWith('/console')) {
        const { cookies } = event
        const session_id = cookies.get("session") ?? ""
        const user = await kv.get(session_id)
        if (!user) {
            throw redirect(302, "/login")
        }
        event.locals.user = user as User
    }
    return await resolve(event)
}
