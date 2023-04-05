import type { RequestHandler } from "./$types"
import * as nodemailer from "nodemailer"


export const GET = (
    ({ url })=>{
        const user_email = url.searchParams.get("email") ?? ""
        if( user_email==="" ) return new Response("Bad Request", { status:400 })
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
                console.log("Happened while sending Auth code")
                console.error(err)
                return new Response("Server Error", { status:500 })
            }
        })
        return new Response("", { status:200 })
    }
) satisfies RequestHandler
