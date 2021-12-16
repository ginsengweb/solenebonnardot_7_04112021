const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")
const auth = require("../middlewares/authToken")

router.put("/", auth, userCtrl.updateUser)
router.delete("/", auth, userCtrl.deleteUser)

module.exports = router
