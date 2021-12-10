const express = require("express")
const router = express.Router()
const commentCtrl = require("../controllers/comments")
const authToken = require("../middlewares/authToken")
const authAdmin = require("../middlewares/authAdmin")

router.post("/", commentCtrl.createComment)
router.delete("/", authToken, authAdmin, commentCtrl.deleteComment)

module.exports = router
