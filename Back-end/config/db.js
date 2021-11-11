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

// DATABASE MYSQL
const dbConfig = require("./config/db")
const db = dbConfig.dbConnexion()
db.connect(function (err) {
  if (err) {
    throw err
  } else {
    console.log("Connecté à la base de données MySQL!")
  }
})
