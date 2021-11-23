const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const id = decodedToken.id
    if (req.body.id && req.body.id !== id) {
      throw "Utilisateur invalide"
    } else {
      next()
    }
  } catch {
    res.status(401).json({
      error: new Error("Requête invalide !"),
    })
  }
}
