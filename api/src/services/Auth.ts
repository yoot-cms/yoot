import { hash_password, verify_password, encode_auth_token } from "../utils"
import User from "../models/User"
import { Request, Response } from "express"

export async function signup( req: Request<{}, {}, { email: string, password: string }>, res: Response ){
    try {
        const { email, password } = req.body
        if( ! (email&&password) || ( typeof(email)!=="string" || typeof(password)!=="string" ) ){
            return res.status(400).send()
        }
        if( await User.findOne({ email}) ){
            return res.status(409).send()
        }
        const new_user = new User({ email, password: hash_password(password) })
        new_user.save((err, _)=>{
            if(err){
                return res.status(500).send()
            }
        })
        const token = encode_auth_token(email)
        return res.status(201).send({
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

export async function login( req: Request<{}, {}, { email: string, password: string }>, res: Response ){
    try {
        const { email, password } = req.body
        if( ! (email&&password) || ( typeof(email)!=="string" || typeof(password)!=="string" ) ){
            return res.status(400).send()
        }
        const user_to_login = await User.findOne({email}) 
        if( ! user_to_login ){
            return res.status(404).send()
        }
        if( verify_password(password, user_to_login.password!) ){
            return res.status(200).send({
                token: encode_auth_token(email)
            })
        }
        return res.status(400).send()
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}


const auth = {
    signup,
    login
}

export default auth