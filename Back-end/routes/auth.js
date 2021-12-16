const userCtrl = require("../controllers/auth.js")
const router = require("express").Router()

router.post("/inscription", userCtrl.inscription)
router.post("/connexion", userCtrl.connexion)

module.exports = router
