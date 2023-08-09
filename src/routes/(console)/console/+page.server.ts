import type { Actions } from "@sveltejs/kit";
import kv from "$lib/kv";

export const actions: Actions = {
  signout: async ({ cookies })=>{
    const session_id = cookies.get("session")!
    await kv.del(session_id)
  }
}
