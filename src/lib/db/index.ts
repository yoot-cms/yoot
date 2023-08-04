import postgres from "postgres";
import * as dotenv from "dotenv"
import { POSTGRES_URL } from "$env/static/private";
dotenv.config()
const config = process.env.NODE_ENV==="production"? { ssl:"require" } as const : {}
const sql = postgres(POSTGRES_URL, config)

export default sql
