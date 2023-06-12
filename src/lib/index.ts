import { JWT_SECRET } from "$env/static/private";
import * as jwt from "jsonwebtoken"

export function verify_token( token : string )  {
    try {
        const { id } = jwt.verify(token, JWT_SECRET) as { id : string }
        return {
            status: true,
            id
        }
    } catch (_) {
        return {
            status: false,
            id : ""
        }
    }
}
