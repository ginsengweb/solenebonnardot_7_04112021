const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    console.log(token)
    jwt.verify(token, "secretToken", (err, res) => {
      if (err) {
        res.json(err + "authentication failed because of wrong token")
      } else {
        console.log(res + "authentication ok !")
        next()
      }
    })
  } catch (error) {
    res.status(401).json(error)
  }
}
