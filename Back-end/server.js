const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()
require("dotenv").config({path: "./config/.env"})

// npm CORS
let corsOptions = {
  origin: `http://${process.env.HOST}:${process.env.CLIENT_PORT}`,
  allowHeader: ["Content-Type", "Authorization"],
  credentials: true,
}

//midlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
const authRouter = require("./routes/auth")
const postsRouter = require("./routes/posts")
const usersRouter = require("./routes/users")
const commentsRouter = require("./routes/comments")

app.use("/api/auth", authRouter)
app.use("/api/posts", postsRouter)
app.use("/api/user", usersRouter)
app.use("/api/comment", commentsRouter)
app.use("/api/upload", express.static(path.join(__dirname, "upload")))

// port
const PORT = process.env.SERVER_PORT || 4200

// server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
