import type { RequestHandler } from "./$types"
import * as nodemailer from "nodemailer"
import logger from "$lib/utils/logger"


export const GET = (
    ({ url })=>{
        const function_name = "RequestAuth"
        const user_email = url.searchParams.get("email") ?? ""
        if( user_email==="" ) return new Response("",{ status:400 })
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"pigeondev01@gmail.com",
                pass:"fkyndapgxobbxodq"
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
        return new Response("", { status:200 })
    }
) satisfies RequestHandler
