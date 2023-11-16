// const {MongoClient}=require("mongodb")
// const  url="mongodb://127.0.0.1:27017/";
// const mongoserver=new MongoClient(url)
// // console.log(mongoserver)
// const connection=async()=>{
// try {
//     await mongoserver.connect()
//     console.log("connected Successfully")
// }
//      catch (error) {
//     console.log("error with database,err",error)
    
// }
// }
// const database=mongoserver.db("humanResources2")

// module.exports={connection,database}



const URI="mongodb+srv://ersukhmanpreetkaur:saman@cluster0.6nexslq.mongodb.net/?retryWrites=true&w=majority";

const mongoose=require('mongoose')
mongoose.set("strictQuery",true)

const connection=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connected Successfully")
    }
         catch (error) {
        console.log("error with database",error)
        
    }
    }
    module.exports={connection}
