import { redirect, type Actions, fail } from "@sveltejs/kit";
import bcrypt from "bcrypt"
import sql from "$lib/db"
import kv from "$lib/kv"

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData()
        const email = data.get("email")! as string
        const password = data.get("password")! as string
        const { rows, rowCount } = await sql<{ email: string, password: string, id: string, plan: string }>` select * from users where email=${email} `
        if (rowCount === 0) {
            return fail(400)
        }
        const [user] = rows
        const password_is_valid = await bcrypt.compare(password, user.password)
        if (!password_is_valid) {
            return fail(400)
        }
        const session_id = crypto.randomUUID()
        await kv.setex(session_id, 60 * 60 * 24, user.id)
        cookies.set("session", session_id, {
            path: "/",
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === "production"
        })
        throw redirect(302, '/console')
    }
}
