const Pool = require('pg').Pool;

const pool = new Pool({
  user: "patricknguyen",
  password: "Paddycakesftw101",
  host: "localhost",
  database: "employees",
  port: 5432
})

module.exports = pool;