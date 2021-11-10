// DOTENV
require("dotenv").config({path: "./config/.env"})

// MYSQL
const mysql = require("mysql")
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
})

module.exports.dbConnexion = () => {
  return db
}
