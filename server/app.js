import express from "express"
import bodyParse from "body-parser"
import logger from "morgan"
import indexRoute from "./api/routes/index"
import { catch404, handleError } from "./api/helpers/error"

/* App Init */
const app = express()
const API_V = process.env.V || "1"

/* Middleware */

//body parser
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

//logger
if (process.env.NODE_ENV === "dev") app.use(logger("dev"))

//routes
app.use(`/api/v${API_V}/`, indexRoute)

//catch 404 && handleError
app.use(catch404, handleError)

export default app
