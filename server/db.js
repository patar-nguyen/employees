//connecting database to server
const { Pool } = require('pg');

const pool = new Pool({
  user: "patricknguyen",
  password: "Paddycakesftw101",
  host: "localhost",
  database: "employees",
  port: 5432
})

module.exports = pool;