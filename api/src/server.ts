import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT} `)
})