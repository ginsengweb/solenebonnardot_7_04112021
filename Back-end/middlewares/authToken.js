const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"]
  const decodedToken = jwt.verify(token, `secretToken`)
  const tokenId = decodedToken.userId
  const userId = req.param("userId")
  console.log(userId, tokenId)
  if (userId == tokenId || req.body.users_id == tokenId) {
    console.log("authok")
    next()
  } else {
    if (!token) {
      throw "Il n'y a aucun token à vérifier !"
    }
    if (err) {
      res.json(err + "authentication failed because of wrong token")
      console.log("erreur")
    }
  }
}
