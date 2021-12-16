const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Récupération model DB
const User = db.users

// **************  INSCRIPTION  *****************
module.exports.inscription = async (req, res) => {
  // hash
  const hash = await bcrypt.hash(req.body.password, 10)
  let userInfo = {
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    password: hash,
  }
  console.log("userInfo prêt à être créé", userInfo)
  try {
    // sequelize
    const user = await User.findOne({
      where: {email: req.body.email},
    })
    if (user) {
      // Déjà inscrit
      console.log("Déjà inscrit", user.dataValues)
      return res.status(403).send({error: "Vous êtes déjà inscrit"})
    } else {
      // if !user
      const user = await User.create(userInfo)
      res.status(200).json({
        id: user.id,
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        token: jwt.sign({userId: user.id}, `secretToken`, {
          expiresIn: "24h",
        }),
      })
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

// ********************  CONNEXION  ************************
module.exports.connexion = async (req, res) => {
  try {
    //  sequelize
    const user = await User.findOne({
      where: {email: req.body.email},
    })
    if (user == null) {
      return res.status(403).send({error: "Vous n'êtes pas inscrit"})
    } else {
      // if user, bcrypt
      console.log("user trouvé", user.dataValues)
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
          //  JWT
          token: jwt.sign({userId: user.id}, `secretToken`, {
            expiresIn: "24h",
          }),
        })
      }
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
