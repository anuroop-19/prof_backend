import dotenv from "dotenv"
import dbconnect from "./db/index.js";
dotenv.config({path:`./.env`})
dbconnect()
.then(()=>{
    console.log("done");
}
)
.catch((err)=>{
    console.log("error",err);
})