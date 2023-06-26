import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = ({ locals })=>{
    console.log(locals.user_id)
}
