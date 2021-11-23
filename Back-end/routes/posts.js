const express = require("express")
const router = express.Router()
const postCtrl = require("../controllers/posts")
const auth = require("../middlewares/auth")

router.post("/:id", postCtrl.addPost)
router.get("/", postCtrl.getAllPosts)
router.put("/:id", postCtrl.updatePost)
router.delete("/:id", postCtrl.deletePost)

module.exports = router
// le middleware d'auth porura être utilisé sur les routes ici car il controle si l'id est le même
