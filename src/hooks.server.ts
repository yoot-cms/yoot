import { redirect, type Handle } from "@sveltejs/kit";
import kv from "$lib/kv"
import type { User } from "./app";

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/console')) {
        const { cookies } = event
        const session_id = cookies.get("session") ?? ""
        const user = await kv.get(session_id)
        if (!user) {
            throw redirect(302, "/login")
        }
        if (typeof user === "string") {
            event.locals.user = JSON.parse(user) as User
        }
    }
    return await resolve(event)
}
