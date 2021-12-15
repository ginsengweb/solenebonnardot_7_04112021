const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const auth = require("../middlewares/authToken")
const authAdmin = require("../middlewares/authAdmin")
const multer = require("../middlewares/multer-config")

router.post("/", multer, postCtrl.createPost)
router.get("/", auth, postCtrl.getAllPosts)
router.delete("/", auth, authAdmin, postCtrl.deletePost)

module.exports = router
