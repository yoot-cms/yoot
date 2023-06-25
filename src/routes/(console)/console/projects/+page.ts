import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
export const ssr = false

export const load = (async ({ fetch }) => {
    const token = localStorage.getItem("token") ?? ""
    if (token === "") throw redirect(301, "/login")
    const response = await fetch(
        "/api/projects",
        {
            headers: {
                "Authorization": token
            }
        }
    )
    if (response.status === 401) {
        throw redirect(302, "/login")
    }
    if (response.status === 500) {
        return { data: {}, error: 500 }
    }

}) satisfies PageLoad
