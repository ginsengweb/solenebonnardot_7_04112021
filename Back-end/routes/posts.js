const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const auth = require("../middlewares/auth")

// router.post("/:id", postCtrl.createPost)
router.get("/", postCtrl.getAllPosts)
// router.put("/:id", postCtrl.updatePost)
// router.delete("/:id", postCtrl.deletePost)

module.exports = router
