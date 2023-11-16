const express=require ("express");
const { connection } = require("./config/db");

const app=express();
app.use(express.json())
const cors=require("cors");
// const { route } = require("./router/productBase");
const categoryroute = require("./router/productBase");
app.use(cors({
    origin:"*"
}))
app.use("/api",categoryroute)
app.get('/', (req, res) => {
    res.send('Hello, this is the main route!');
  });
 ;
app.listen(5002,async()=>{
    try {
        await connection();
        console.log("Server is running in 5002 Port no.")
    } catch (error) {
        console.log("Server is showning the errrorrr",error)
    }
})