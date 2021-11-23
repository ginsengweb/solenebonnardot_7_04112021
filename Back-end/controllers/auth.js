const db = require("../models")

const User = db.users

module.exports.inscription = async (req, res) => {
  let userInfo = {
    email: req.body.email,
    password: req.body.password,
  }
  const user = await User.create(userInfo)
  res.status(200).send(user)
}

module.exports.connexion = (req, res) => {
  // console.log("connexion en cours de création")
  // Check si email is in DB :
  // let userinfo = { email: req.body.email, pass....}
  // let email exists = ...;
  // if (!emailexist) { res.status.400 email inexistant }
  // else {
  //   bcrypt.compare
  //   if (!passwordissame) {mauvais mdp }
  //   else { }
  // }
}
