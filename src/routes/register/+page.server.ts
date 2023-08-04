import { redirect, type Actions, fail } from "@sveltejs/kit";
import sql from "$lib/db"
import bcrypt from "bcrypt"

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const email = data.get("email")! as string
    const username = data.get("username")! as string
    const password = data.get("password")! as string
    const [user] = await sql` select email from users where email=${email} `
    if (user) {
      return fail(409)
    }
    const hashed_pwd = await bcrypt.hash(password, 10)
    const plan = "basic"
    await sql`
      INSERT INTO users(email, password, username, plan)
      values(${email}, ${hashed_pwd}, ${username}, ${plan})
    `
    throw redirect(301, "/login")
  }
} satisfies Actions
