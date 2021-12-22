const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  // Récupération du token dans le header
  const token = req.headers["x-access-token"]
  // Verify
  const decodedToken = jwt.verify(token, `secretToken`)
  const tokenId = decodedToken.userId
  // Compare avec params
  const userId = req.param("userId")
  console.log("userId : ", userId, ",tokenId", tokenId)
  if (userId == tokenId || req.body.users_id == tokenId) {
    console.log("Authentification réussie")
    next()
  } else {
    if (!token) {
      throw "Il n'y a aucun token à vérifier !"
    }
    if (err) {
      res.json(err + "Problème lors de l'authentification")
      console.log("erreur")
    }
  }
}
