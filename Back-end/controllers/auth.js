// PACKAGES**************************
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dbc = require("../config/db")
const db = dbc.dbPool()
const jwb = require("../middlewares/auth")

// MIDDLEWARES*************************
// Inscription
exports.inscription = async (req, res) => {
  try {
    // Bcrypt : salt & hash
    const {password: passwordToCrypt} = req.body
    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(passwordToCrypt, salt)
    const user = {
      ...req.body,
      password: encryptedPassword,
    }
    // Base de données
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
exports.connexion = (req, res) => {
  const {email, password} = req.body
  const sql = `SELECT * FROM users WHERE email= ?`
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(404).json({err})
    } else {
      // check ce que ça veut dire
      try {
        const {password: hashedPassword} = results[0]
        const passwordIsSame = await bcrypt.compare(password, hashedPassword)
        if (passwordIsSame) {
          token: jwt.sign({id}, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          })
        } else {
          console.log("The password is not the same")
        }
      } catch (err) {
        console.log(err)
        return res.status(400).json({err})
      }
    }
  })
}
