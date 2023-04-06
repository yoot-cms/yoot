import type { RequestHandler } from "./$types"
import * as nodemailer from "nodemailer"
import logger from "$lib/utils/logger"
import { DB_URL, DB_APP_TOKEN, GMAIL_PASS } from "$env/static/private"
import type { AuthCode } from "$lib/types"

export const GET = (
    async ({ url })=>{
        const function_name = "RequestAuth"
        const user_email = url.searchParams.get("email") ?? ""
        if( user_email==="" ) return new Response("",{ status:400 })
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"pigeondev01@gmail.com",
                pass:GMAIL_PASS
            }
        })
        const auth_code  = `${Math.round(Math.random()*1000000)}`
        const mail_options = {
            from:"pigeondev01@gmail.com",
            to:user_email,
            subject:"YOOT authentication code",
            text:`Your authentication code is ${auth_code}`
        }
        transporter.sendMail(mail_options, (err, _info)=>{
            if(err){
                logger("ERR", err.message, function_name)
                return new Response("", { status:500 })
            }
        })
        logger("INFO", `Auth code sent to ${user_email}`, function_name )
        // Save authcode in db
        const new_code: AuthCode = {
            used:false,
            code:auth_code,
            generated_for:user_email,
            validity_date: new Date().toLocaleDateString()
        }
        const response = await fetch(
            `${DB_URL}/collections/auth_codes`,
            {
                headers:{
                    "X-Cassandra-Token":DB_APP_TOKEN,
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(new_code),
                method:"POST"
            }
        ).then(res=>{
            if(res.status!==201){
                return new Response("", { status:500 })
            }
            return new Response("", {  status:200})
        }).catch(err=>{
            logger("ERR", err, function_name)
            return new Response("", { status:500 })
        })
        return response
    }
) satisfies RequestHandler
