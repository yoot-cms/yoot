import type { Handle } from "@sveltejs/kit";
import kv from "$lib/kv"

// export const handle : Handle = async ({ event, resolve })=>{
//     const { cookies } = event
//     const session_id = cookies.get("session") ?? ""
//     const user_id = await kv.get(session_id)
//     if(typeof user_id === "string"){
//         event.locals.user_id = user_id
//     }
//     return await resolve(event)
// }
