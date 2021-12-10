const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")
const authToken = require("../middlewares/authToken")
const multer = require("../middlewares/multer-config")

router.put("/", authToken, userCtrl.updateUser)
router.delete("/", authToken, userCtrl.deleteUser)

module.exports = router
