const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")
const auth = require("../middlewares/authToken")
const multer = require("../middlewares/multer-config")

router.put("/", auth, userCtrl.updateUser)
router.delete("/", auth, userCtrl.deleteUser)

module.exports = router
