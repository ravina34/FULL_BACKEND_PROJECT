import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>
{

   try{
const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    
      console.log(`\n MONGODB connected !! db host : ${connectInstance.connection.host}`)  
      
    }

    

 

   catch(error)
   {
    console.error(" MONGODB CONNECTION ERROR", error)
    process.exit(1)
   }

   
}


export default  connectDB
   
