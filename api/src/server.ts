import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { DB_URL } from "./config"
import auth from "./routes/auth"
dotenv.config()


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use("/auth", auth)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    mongoose.connect(DB_URL).then(_=>{
        console.log("Connected to database")
        console.log(`App listening on port ${PORT} `)
    }).catch(err=>{
        console.log(`Failed to connect to database ${err}`)
        process.exit(1)
    })
})