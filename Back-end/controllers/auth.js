const db = require("../models")
const bcrypt = require("bcrypt")
const {Op} = require("sequelize")
const jwt = require("jsonwebtoken")

const User = db.users

module.exports.inscription = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)
  let userInfo = {
    email: req.body.email,
    password: hash,
  }
  const user = await User.create(userInfo)
  res.status(200).json({
    prenom: user.prenom,
    nom: user.nom,
    email: user.email,
    user: user.id,
    token: jwt.sign({userId: user.id}, `secretToken`, {
      expiresIn: "24h",
    }),
  })
}

module.exports.connexion = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    })
    if (user == null) {
      return res.status(403).send({error: "Vous n'êtes pas inscrit"})
    } else {
      const match = await bcrypt.compare(req.body.password, user.password)
      if (match) {
        return res.status(401).json({error: "Mot de passe incorrect !"})
      } else {
        const Token = {
          id: user.id,
          token: jwt.sign({id: user.id}, `secretToken`, {
            expiresIn: "24h",
          }),
        }
        res.status(200).json(Token)
      }
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
