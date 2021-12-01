const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users")
const auth = require("../middlewares/auth")
// const multer = require("../middlewares/multer-config")

router.get("/", userCtrl.getOneUser)
router.put("/:id", auth, userCtrl.updateUser)
router.delete("/:id", auth, userCtrl.deleteUser)
// // router.delete? check rgpd et si ça supprimera pas toutes les infos, peutêtre créer une autre route, modify, qui fait passer en liste désactiver

module.exports = router
