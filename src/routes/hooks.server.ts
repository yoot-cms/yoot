import { redirect, type Handle } from "@sveltejs/kit";
import kv from "$lib/kv"

export const handle : Handle = async ({ event, resolve })=>{
    const { cookies } = event
    const session_id = cookies.get("session_id") ?? ""
    if(session_id===""){
        throw redirect(301, "/login")
    }
    const user = await kv.get(session_id)
    if(user===null){
        throw redirect(301, "/login")
    }
    event.locals.user_id = user as string
    return await resolve(event)
}
