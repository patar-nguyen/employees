//create server
const express = require("express");
const app = express();
//middleware allows server and react to connect
const cors = require("cors");
const pool = require("./db");

app.use(cors());

//to retreive json data
app.use(express.json());


app.listen(3001, () => {
  console.log("server on 3001");
});

//creating new employee
app.post("/employee", async (req, res) => {
  //async makes it so the function returns promise which is an eventual result of an async operation
  try {
    //req.body retrieves the json data from client side
    const { name, code, profession, color, city, branch, assigned } = req.body;
    //await makes it wait until the promise resolves
    const newEmployee = await pool.query(`INSERT INTO employee (name, code, profession, color, city, branch, assigned) 
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
    [name, code, profession, color, city, branch, assigned]);
    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//getting all employees
app.get("/employee", async (req, res) => {
  try {
    const allEmployees = await pool.query('SELECT * FROM employee ORDER BY employee_id ASC');
    res.json(allEmployees.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//getting a specific employee with the id
app.get("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const oneEmployee = await pool.query('SELECT * from employee WHERE employee_id = $1', [id])
    res.json(oneEmployee.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update an employee information
app.put("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, profession, color, city, branch, assigned } = req.body;
    
    const updateEmployee = await pool.query(`UPDATE employee 
    SET name = $1, code = $2, profession = $3, color = $4, city = $5, branch = $6, assigned = $7 
    WHERE employee_id = $8`, 
    [name, code, profession, color, city, branch, assigned, id]);
    res.send("Employee updated")
  } catch (err) {
    console.log(err.message);
  }
});

//delete employee
app.delete("/employee/:id", async (req, res) => {
   try {
    const { id } = req.params;

    const deleteEmployee = await pool.query('DELETE from employee WHERE employee_id = $1', [id]);
    res.send("Employee deleted");
   } catch (err) {
     console.log(err.message);
   }
})