import { DB_APP_TOKEN, DB_URL } from "$env/static/private"
import type { RequestHandler } from "./$types"
import logger from "$lib/utils/logger"
import type { AuthCodeData } from "$lib/types"


export const GET = (
    async ({ url }) => {
        const function_name = "VerifyAuth"
        try {
            const user_email = url.searchParams.get("email") ?? ""
            const code = url.searchParams.get("code") ?? ""
            if (user_email === "") {
                return new Response("email query parameter is required", { status: 400 })
            }
            if (code === "") {
                return new Response("invalid code", { status: 400 })
            }
            const where_clause = { "used": { "$eq": false }, generated_for: { "$eq": user_email }, code: { "$eq": code } }
            const req_url: URL = new URL(`${DB_URL}/collections/auth_codes`)
            req_url.searchParams.append("where", JSON.stringify(where_clause))
            const code_verification_response = await fetch(
                req_url.toString(),
                {
                    headers: {
                        "X-Cassandra-Token": DB_APP_TOKEN,
                        "Content-Type": "application/json"
                    }

                }
            )
            if(code_verification_response.status!==200){
                return new Response("", { status:code_verification_response.status })
            }
            const { data } = await code_verification_response.json() as AuthCodeData
            const document_id = Object.keys(data)[0]
            //Invalidate auth code
            await fetch(
                `${DB_URL}/collections/auth_codes/${document_id}`,
                {
                    headers:{
                        "X-Cassandra-Token": DB_APP_TOKEN,
                        "Content-Type": "application/json"
                    },
                    method: "PATCH",
                    body: JSON.stringify({
                        used: true
                    })
                }
            )
            //Check if user exists in database, create account if not
            const user_where_clause = { "email": { "$eq": user_email }, active:{ "$eq":true } }
            const user_req_url: URL = new URL(`${DB_URL}/collections/users`)
            user_req_url.searchParams.append("where", JSON.stringify(user_where_clause))
            const user_search_response = await fetch(
                user_req_url.toString(),
                {
                    headers: {
                        "X-Cassandra-Token": DB_APP_TOKEN,
                        "Content-Type": "application/json"
                    }
                }
            )
            if(user_search_response.status===404){
                console.log("not found")
            }
            if(user_search_response.status===200){
                console.log("found")
            }
            logger("ERR", user_search_response.statusText, function_name)
            return new Response("", { status: 500 })
        } catch (err) {
            logger("ERR", err as string, function_name)
            return new Response("", { status: 500 })
        }
    }
) satisfies RequestHandler
