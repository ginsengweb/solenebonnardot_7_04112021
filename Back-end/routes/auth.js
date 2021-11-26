const {Router} = require("express")
const userCtrl = require("../controllers/auth.js")
const router = require("express").Router()

router.post("/inscription", userCtrl.inscription)
router.post("/connexion", userCtrl.connexion)
// router.???("/logout", userCtrl.logout)
// router. desactivation du compte

module.exports = router
