const express = require("express")
const router = express.Router()
const commentCtrl = require("../controllers/comments")
const auth = require("../middlewares/authToken")
const authAdmin = require("../middlewares/authAdmin")

router.post("/", auth, commentCtrl.createComment)
router.delete("/", auth, authAdmin, commentCtrl.deleteComment)

module.exports = router
