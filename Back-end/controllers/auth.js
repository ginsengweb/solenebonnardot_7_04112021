const db = require("../models")
const bcrypt = require("bcrypt")
const {Op} = require("sequelize")
const jwt = require("jsonwebtoken")

const User = db.users

module.exports.inscription = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)
  let userInfo = {
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    password: hash,
  }
  try {
    const user = await User.findOne({
      where: {email: req.body.email},
    })
    if (user) {
      return res.status(403).send({error: "Vous êtes déjà inscrit"})
    } else {
      const user = await User.create(userInfo)
      res.status(200).json({
        id: user.id,
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        token: jwt.sign({users_id: user.id}, `secretToken`, {
          expiresIn: "24h",
        }),
      })
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

module.exports.connexion = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {email: req.body.email},
    })
    if (user == null) {
      return res.status(403).send({error: "Vous n'êtes pas inscrit"})
    } else {
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) {
        return res.status(401).json({error: "Mot de passe incorrect !"})
      } else {
        res.status(200).json({
          id: user.id,
          prenom: user.prenom,
          nom: user.nom,
          email: user.email,
          admin: user.admin,
          token: jwt.sign({users_id: user.id}, `secretToken`, {
            expiresIn: "24h",
          }),
        })
      }
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
