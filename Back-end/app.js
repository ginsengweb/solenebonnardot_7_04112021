// EXPRESS
const express = require("express")
const app = express()
const path = require("path")
const pool = require("./config/db")
const poolConnexion = pool.dbPool()

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.PORT}`)
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
poolConnexion.getConnection(function (err) {
  if (err) {
    console.log("erreur DB" + err)
  } else {
    console.log("Connecté à la base de données MySQL!")
  }
})
// ROUTES
const usersRoutes = require("./routes/users")
const postsRoutes = require("./routes/posts")
const authRoutes = require("./routes/auth")
const commentsRoutes = require("./routes/comments")

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/posts", postsRoutes)
app.use("/api/comments", commentsRoutes)

module.exports = app
