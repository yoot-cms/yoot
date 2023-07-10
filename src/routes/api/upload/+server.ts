import { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from "$env/static/private";
import type { RequestHandler } from "./$types";
import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs"

export const POST: RequestHandler = async ({ request }) => {
    try {
        cloudinary.config({
            cloud_name: CLOUDINARY_NAME,
            api_secret: CLOUDINARY_API_SECRET,
            api_key: CLOUDINARY_API_KEY,
        })
        const form_data = await request.formData()
        const file = form_data.get("file")! as File
        const file_id = crypto.randomUUID()
        console.log(file, file_id)
        return new Response()
    } catch (err) {
        console.log(err)
        return new Response()
    }
}
