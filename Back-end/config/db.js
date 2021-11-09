// DOTENV / MYSQL
require("dotenv").config({path: "./config/.env"})
const mysql = require("mysql")
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
})

module.exports.dbConnexion = () => {
  return db
}