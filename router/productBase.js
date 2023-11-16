// const { addProduct, UpdatePrice, Find, FindSalary, FindExp, FindGrad, Delete } = require("../controller/product");

const { addEmployee, findEmployee, listGreater30000, listEmployees2Years, updateSalary, deleteEmployees } = require("../controller/user_Collection");
// const Employee = require("../model/usermodel");

// const categoryroute=require ("express").Router();
// categoryroute.post("/addProduct",addProduct)
// categoryroute.put("/updateProduct",UpdatePrice)
// categoryroute.post("/find",Find)
// categoryroute.post("/findSalary",FindSalary)
// categoryroute.post("/findExp",FindExp)
// categoryroute.delete("/delete",Delete)

// module.exports=categoryroute;

// const express =require("express")
const categoryroute=require ("express").Router();
categoryroute.post('/employeee',addEmployee)
categoryroute.post('/find',findEmployee)
categoryroute.post('/greater',listGreater30000)
categoryroute.post('/greater2yrs',listEmployees2Years)
categoryroute.put('/update',updateSalary)
categoryroute.delete('/delete',deleteEmployees)

module.exports=categoryroute