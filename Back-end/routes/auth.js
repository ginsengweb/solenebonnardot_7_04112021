const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/auth")

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
// router.???("/logout", userCtrl.logout)
// router. desactivation du compte

module.exports = router
