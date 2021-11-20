const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/auth")
const auth = require("../middlewares/auth")

router.post("/inscription", userCtrl.inscription)
router.post("/connexion", auth, userCtrl.connexion)
// router.???("/logout", userCtrl.logout)
// router. desactivation du compte

module.exports = router
