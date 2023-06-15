import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

import authentiactionRouters from "./app/routers/authentication"
import entitiesRouters from "./app/routers/entities"
import { endPointRouter } from "./app/settings/routers"

dotenv.config()

const MONGO_CONNECTION_URL = process.env?.MONGO_CONNECTION_URL ?? ""
const PORT = process.env?.PORT ?? 3000
const MODE = process.env?.MODE ?? "development"

const app = express()

app.use(cookieParser())

app.use(bodyParser.json({ limit: "3000mb" }))
app.use(bodyParser.urlencoded({ limit: "3000mb", extended: true }))

app.use(endPointRouter, entitiesRouters)
app.use(endPointRouter, authentiactionRouters)

mongoose
  .connect(MONGO_CONNECTION_URL)
  .then(() => {
    console.log(`------> Database connected and ready for ${MODE}.`)
  })
  .catch((error) => {
    console.log(error)
  })

app.listen(PORT, () => {
  console.log(`------> Server running on port ${PORT}.`)
})
