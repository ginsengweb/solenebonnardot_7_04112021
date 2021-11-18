const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")
const auth = require("../middlewares/auth")
// const multer = require("../middlewares/multer-config")

router.get("/:id", auth, userCtrl.getOneUser)
router.put("/:id", auth, userCtrl.updateOneUser)
// router.delete? check rgpd et si ça supprimera pas toutes les infos, peutêtre créer une autre route, modify, qui fait passer en liste désactiver

module.exports = router
