const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/auth")

router.post("/inscription", userCtrl.inscription)
// router.post("/connexion", userCtrl.connexion)
// router.???("/logout", userCtrl.logout)
// router. desactivation du compte

module.exports = router
