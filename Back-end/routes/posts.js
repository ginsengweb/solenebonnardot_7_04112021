const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/post")
const auth = require("../middlewares/auth")
const multer = require("../middlewares/multer-config")

router.get("/", auth, postCtrl.getAllPosts)
router.get("/:id", auth, postCtrl.getOnePost)
router.post("/:id", auth, multer, postCtrl.createPost)
router.delete("/:id", auth, postCtrl.deleteOnePost)
router.put("/:id", auth, postCtrl.modifyPost)

module.exports = router
