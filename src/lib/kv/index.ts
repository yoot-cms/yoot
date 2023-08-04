import Redis from "ioredis"
import * as dotenv from "dotenv"
dotenv.config()
import { REDIS_URL } from "$env/static/private"
const kv = new Redis(REDIS_URL)

export default kv
