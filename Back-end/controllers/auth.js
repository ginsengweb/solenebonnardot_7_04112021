// PACKAGES
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// ROUTES
const jwb = require("../middlewares/auth")

// MIDDLEWARES
// Inscription
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10) // salage x 10 tours
    .then(hash => {
      const user = {
        ...req.body,
        user_password: hash,
      };
      // INSERT user INTO users ?   => stocker ça dans une const que je réutilise dans fonction .query?  
      //.query(user) => {           => dois-je absolument mettre db devant le .query ?
      // si emaildéjà dans db {
      res.status().json({ message: "Email déjà enregistré" }) //revoir les status 200300ETC.
      // else {
      res.status(201).json({ message: "Utilisateur créé avec succès !" });
    }
    .catch (error => res.status(500).json({ error }))
}

// Connexion
exports.login = (req, res, next) => {
  User.findOne({email: req.body.email}) // Check e-mail is in DB
    .then(user => {
      if (!user) {
        return res.status(401).json({error: "Utilisateur non trouvé !"})
      }
      bcrypt
        .compare(req.body.password, user.password) // Compare le mdp et le hash enregistré dans la BDD
        .then(valid => {
          if (!valid) {
            return res.status(401).json({error: "Mot de passe incorrect !"})
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              // Créa token de session contenant ID user en tant que payload (les données encodées dans le token)
              {userId: user._id},
              // Encodage token
              "RANDOM_TOKEN_SECRET",
              {expiresIn: "24h"}
            ),
          })
        })
        .catch(error => res.status(500).json({error}))
    })
    .catch(error => res.status(500).json({error}))
}

// const mysql = 'INSERT TO user';     A QUOI SERT LE '?'
// récupérer middleware d'authentification à la DB => éventuellement stocker ça dans un fichier dans le odssier config
// '.query() => {} permet d'interagir avec mysql
//
//
// On parle dans les specs de persistance de la session, donc si users veut se déconnecter, peut-être créer un middleware pour se déconnecter
//
// Persistance des données => COOKIES !!!! aucune diée du fonctionnement des cookies, check cours
//
//
