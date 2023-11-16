
const Employee = require("../model/usermodel");

const addEmployee = async () => {
    const data1=[{
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
      },{
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },{
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },{
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },{
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      }];

    try {
        for (const data of data1) {
        const newEmployee = await Employee.create(data);
        console.log("Employee add Sucessfully")}
    } catch (error) {
        console.error("Error adding employee:", error);
    }
};
addEmployee();

const findEmployee = async () => {
    try {
        const employees = await Employee.find();
        console.log("Employee Find Sucessfully");
    } catch (error) {
        console.error("Error adding employee:", error);
    }
};
findEmployee();





const listGreater30000 = async () => {
    try {
      const employees1 = await Employee.find({ salary: { $gt: 30000 } });
      console.log("Employees with salary greater than 30000");
    } catch (error) {
      console.error("Error in employees:", error);
    }
  };
  
  listGreater30000 ();

  const listEmployees2Years = async () => {
    try {
      const employees = await Employee.find({ overallExp: { $gt: 2 } });
      console.log("Employees with experience greater than 2 years");
    } catch (error) {
      console.error("Error listing employees:", error);
    }
  };
  
  listEmployees2Years();

  const listEmployeesYear = async () => {
    try {
      const employees = await Employee.find({
        yearGrad: { $gt: 2015 },
        overallExp: { $gt: 1 }
      });
  
      console.log("Employees graduated after 2015 with experience greater than 1 year");
    } catch (error) {
      console.error("Error listing employees:", error);
    }
  };
  listEmployeesYear();

  const updateSalary = async () => {
    try {
      const result = await Employee.updateMany(
        { salary: { $gt: 70000 } },
        { $set: { salary: 65000 } }
      );
  
      console.log('employees salaries updated.');
    } catch (error) {
      console.error("Error updating salaries:", error);
    }
  };
  updateSalary();

  const deleteEmployees = async () => {
    try {
      const result = await Employee.deleteMany({ lastCompany: 'Y' });
  
      console.log('employees deleted.');
    } catch (error) {
      console.error("Error deleting employees:", error);
    }
  };
  deleteEmployees();
  module.exports = { addEmployee,findEmployee,listGreater30000,listEmployees2Years,listEmployeesYear,updateSalary,deleteEmployees};


// "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json

// Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""

// Query the collection ""employee"" and list all the documents
// Query the collection ""employee"" and list the employees who are having salary more than 30000
// Query the collection ""employee"" and list the employees who are having experience more than 2 years.
// Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
// Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
// Delete all the documents from ""employee"" where last company is Y"
