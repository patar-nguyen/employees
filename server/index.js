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
    console.error(err.message);
  }
});

//getting all employees
app.get("/employee", async (req, res) => {
  try {
    const allEmployees = await pool.query('SELECT * FROM employee');
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
  }
});