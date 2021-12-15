const {Op} = require("sequelize")
// const token = require("../middlewares/authToken")
const db = require("../models")
const fs = require("fs")

const Comment = db.comments
const User = db.users
exports.createComment = async (req, res) => {
  const user_id = req.body.users_id
  try {
    const user = await User.findOne({
      attributes: ["nom", "prenom", "id"],
      where: {id: user_id},
    })
    console.log("comment lancé")
    const comment = await Comment.create({
      content: req.body.content,
      users_id: user_id,
      post_id: req.body.post_id,
    })
    comment.dataValues.users = user.dataValues
    res.status(201).json({comment: comment})
  } catch {
    res.status(500).send({error: "Erreur serveur"})
  }
}

exports.deleteComment = async (req, res) => {
  console.log("req", req.body.id)
  const comment = await Comment.destroy({where: {id: req.body.id}})
  res.status(200).json({comment, message: "Commentaire supprimé"})
  // console.log("res", res)
}
