const {database}=require("../config/db")
const productStore=database.collection("productStore")

const addProduct=async(req,res)=>{
    try {
        const productDetails = req.body;
        const data = await productStore.insertMany(productDetails);
        res.send({ msg: "Added Successfully", data: data });
      } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ error: "Internal Server Error" });
      }
}
const UpdatePrice= async(req,res)=>{
  try {
    await productStore.updateMany({ "salary": { $gt: 70000 } }, { $set: { "salary": 65000 } });
    res.send("Update Successfully");
  } catch (error) {
    console.error("Error updating price:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}

const Find= async(req,res)=>{
    try {
      await productStore.find({});
      res.send("Find Successfully");
    } catch (error) {
      console.error("Error Finding:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }

  const FindSalary= async(req,res)=>{
    try {
      await productStore.find({ "salary": { $gt: 30000 } });
      res.send("Find Salary greater than 30000 Successfully");
    } catch (error) {
      console.error("Error Finding Salary:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }

  const FindExp= async(req,res)=>{
    try {
      await productStore.find({ "overallExp": { $gt: 2 } });
      res.send("Find Experience greater than 2 Successfully");
    } catch (error) {
      console.error("Error Finding Experience:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }

  const FindGrad= async(req,res)=>{
    try {
      await productStore.find({ "yearGrad": { $gt: 2015 }, "overallExp": { $gt: 1 } });
      res.send("Find Employees Graduated After 2015 with Experience > 1 Year Successfully");
    } catch (error) {
      console.error("Error Find Employees Graduated:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }

  const Delete= async(req,res)=>{
    try {
      await productStore.deleteMany({ "lastCompany": "Y" });
      res.send("Deleted Successfully");
    } catch (error) {
      console.error("Error Deleted:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }

module.exports={addProduct,UpdatePrice,Find,FindSalary,FindExp,FindExp,FindGrad,Delete}