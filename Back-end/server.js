const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
  origin: `http://localhost:3000`,
  allowHeader: ["Content-Type", "Authorization"],
}

//midlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
const authRouter = require("./routes/auth")
const postsRouter = require("./routes/posts")
app.use("/api/auth", authRouter)
app.use("/api/posts", postsRouter)

// port
const PORT = process.env.PORT || 4200

//server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
