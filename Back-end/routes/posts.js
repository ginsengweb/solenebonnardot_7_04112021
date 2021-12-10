const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const authToken = require("../middlewares/authToken")
const authAdmin = require("../middlewares/authAdmin")

router.post("/", authToken, postCtrl.createPost)
router.get("/", authToken, postCtrl.getAllPosts)
router.delete("/", authToken, authAdmin, postCtrl.deletePost)

module.exports = router
