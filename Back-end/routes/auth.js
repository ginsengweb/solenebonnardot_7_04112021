const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/auth")

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
router.get("/test", userCtrl.test)
// router.???("/logout", userCtrl.logout)
// router. desactivation du compte

module.exports = router
