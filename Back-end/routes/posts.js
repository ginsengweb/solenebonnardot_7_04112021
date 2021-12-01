const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const auth = require("../middlewares/auth")

router.post("/:id", auth, postCtrl.createPost)
router.get("/", auth, postCtrl.getAllPosts)
router.put("/:id", auth, postCtrl.updatePost)
router.delete("/:id", auth, postCtrl.deletePost)

module.exports = router
