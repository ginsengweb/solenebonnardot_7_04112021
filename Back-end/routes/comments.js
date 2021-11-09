const express = require("express")
const router = express.Router()
const commentCtrl = require("../controllers/comment")
const auth = require("../middlewares/auth")

router.post("/:id", auth, commentCtrl.createComment)
router.get("/:id/allcomments", auth, commentCtrl.getAllComments)
router.put("/:id", auth, commentCtrl.modifyComment)
router.delete("/:id", auth, commentCtrl.deleteComment)

module.exports = router
