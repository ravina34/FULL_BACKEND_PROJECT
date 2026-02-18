import dotenv from "dotenv"



import connectDB from "./DB/index.js";



dotenv.config({
    path: './env'
})

 connectDB()
 .then(()=>
{
    app.listen(process.env,PORT || 8000, ()=>
    {
        console.log(` server is running  on port:  ${process.env.PORT}`)
    }) 
})
 .catch((err) => {
    console.log("mongo db connection failed !!!", err);
 })






























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