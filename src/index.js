import dotenv from "dotenv"



import connectDB from "./DB/index.js";



dotenv.config({
    path: './env'
})

 connectDB()






























/* first approach

import moongoose from "moongoose";
import { DB_NAME } from "./constants";
import express from  "./ express"

const app = express()

(async () =>
{

   try{
await moongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
     app.on("error", (error) =>
    {
      console.log("ERROR:", error)  
      throw error
    })

    app.listen(process.env.PORT, () =>
    {
        console.log(`app is listening on port :  ${process.env.PORT}`)
    })
} 

 

   catch(error)
   {
    console.error("ERROR", error)
   }

   
})()
   */