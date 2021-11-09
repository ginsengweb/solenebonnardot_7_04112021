// EXPRESS
const express = require("express")
const app = express()
const path = require("path")

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

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.HOST}`)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  )
  res.setHeader("Access-Control-Allow-Credentials", "true")
  next()
})

// ROUTES
// const userRoutes = require("./routes/user.routes")
// const postRoutes = require("./routes/post.routes")
// const authRoutes = require("./routes/auth.routes")
// const commentRoutes = require("./routes/comment.routes")

// app.use("/api/auth", authRoutes)
// app.use("/api/user", userRoutes)
// app.use("/api/post", postRoutes)
// app.use("/api/comment", commentRoutes)

module.exports = app
