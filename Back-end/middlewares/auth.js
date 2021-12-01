const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
      res.send("il n'y a pas de token à vérifier")
    } else {
      jwt.verify(token, "secretToken", (err, decoded) => {
        if (err) {
          res.json({
            auth: false,
            message: "authentication failed because of wrong token",
          })
        } else {
          console.log("authentication ok !")
          req.userId = decoded.id
          next()
        }
      })
    }

    // const userId = decodedToken.userId // on récupère l'id du token
    // if (req.body.userId && req.body.userId !== userId) {
    //   // on compare le userid de la requête à celui du token
    //   throw "User id non valable !"
    // } else {
    next()
    // }
  } catch (error) {
    res.status(401).json(error)
  }
}
