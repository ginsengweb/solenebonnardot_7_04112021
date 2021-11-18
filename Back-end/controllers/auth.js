// PACKAGES**************************
const bcrypt = require("bcrypt")
const dbc = require("../config/db")
const db = dbc.dbPool()
const jwb = require("../middlewares/auth")

// MIDDLEWARES*************************
// Inscription
exports.inscription = async (req, res) => {
  try {
    const {password: passwordToCrypt} = req.body

    // bcrypt
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(passwordToCrypt, salt)

    const user = {
      ...req.body,
      password: encryptedPassword,
    }
    const sql = "INSERT INTO users SET ?"
    db.query(sql, user, (err, result) => {
      console.log(result)
      if (!result) {
        res.status(200).json({message: "Email déjà enregistré" + err})
      } else {
        res.status(201).json({message: "Utilisateur créé avec succès !"})
      }
    })
  } catch (err) {
    res.status(400).json({message: err})
  }
}

// Connexion

// On parle dans les specs de persistance de la session, donc si users veut se déconnecter, peut-être créer un middleware pour se déconnecter
//
// Persistance des données => COOKIES !!!! aucune diée du fonctionnement des cookies, check cours
//
//
