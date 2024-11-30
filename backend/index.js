import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()

const PORT=process.env.PORT || 4000
const mongodbURL=process.env.mongodbURL

//connect to mongodb
try {
  mongoose.connect(mongodbURL)
  console.log('Connected to database')
} catch (error) {
  console.log('error: ', error)
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.get("/", (req,res)=>{
  res.send("Hello world");
})

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`)
})