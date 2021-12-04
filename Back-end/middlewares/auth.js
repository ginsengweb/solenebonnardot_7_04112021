const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"]
  console.log(token)
  jwt.verify(token, `secretToken`, (err, decoded) => {
    if (!token) {
      console.log("no token")
    }
    if (err) {
      res.json(err + "authentication failed because of wrong token")
      console.log("erreur")
    } else {
      console.log(res + "authentication ok !")
      next()
    }
  })
}
