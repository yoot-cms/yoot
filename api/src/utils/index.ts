import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { bcrypt_salt, jwt_secret } from "../config"

export function hash_password( plain_text_password: string ) : string {
    return bcrypt.hashSync(plain_text_password, bcrypt_salt) 
}

export function verify_password( plain_text_password : string, hash: string ) : boolean {
    return bcrypt.compareSync(plain_text_password, hash)
}

export function encode_auth_token( user_email: string ) : string {
    return jwt.sign({user_email}, jwt_secret)
}

export function decode_and_verify_token( auth_token: string ) : { passed: boolean, value: string | undefined } {
    try {
        const verification_result = jwt.verify(auth_token, jwt_secret) as { email: string }
        return {
            passed: true,
            value: verification_result.email
        }
    } catch (_) {
        return {
            passed: false,
            value: undefined
        }
    }
}
