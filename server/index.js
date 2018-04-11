import app from "./app"
import { createServer } from "http"
import mongoose from "mongoose"

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test"
const server = createServer(app)

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (err) {
    throw err
  }
}

//start db connection and server
startServer()
