import express, { Request, Response } from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import bodyParser from "body-parser"

dotenv.config()

const app = express()
app.use(bodyParser.json())

const PORT = 5000 | process.env.PORT


app.listen(PORT, ()=>{
	console.log("App listening on port 5000")
})
