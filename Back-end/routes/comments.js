const express = require("express")
const router = express.Router()
const commentCtrl = require("../controllers/comments")
const auth = require("../middlewares/auth")

router.post("/", commentCtrl.createComment)
router.delete("/", auth, commentCtrl.deleteComment)

module.exports = router
