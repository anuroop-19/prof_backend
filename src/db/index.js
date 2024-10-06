import mongoose from "mongoose";
import { db_name } from "../constants.js";
const dbconnect=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        console.log("connection was succesfully established",connectionInstance.connection.host);
    }
    catch(error)
    {
        console.log('error',error);
        process.exit(1);
    }
}
export default dbconnect