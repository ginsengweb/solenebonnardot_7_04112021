module.exports = async (req, res, next) => {
  const user_id = req.body.user_id
  const admin = req.body.admin
  const author_user_id = req.body.user_id

  if (user_id === author_user_id || admin === 1) {
    next()
  } else {
    res.send(401).json("Vous n'êtes pas authorisé à supprimer ce post")
  }
}
