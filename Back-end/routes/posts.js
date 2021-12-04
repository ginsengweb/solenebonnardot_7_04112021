const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const auth = require("../middlewares/auth")

router.post("/", auth, postCtrl.createPost)
router.get("/", auth, postCtrl.getAllPosts)

module.exports = router
