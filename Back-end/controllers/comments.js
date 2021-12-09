const {Op} = require("sequelize")
const token = require("../middlewares/auth")
const db = require("../models")
const fs = require("fs")
const {comments} = require("../models")

const Comment = db.comments

exports.createComment = async (req, res) => {
  try {
    console.log("comment lancé")
    const comment = await Comment.create({
      content: req.body.content,
      users_id: req.body.users_id,
      post_id: req.body.post_id,
    })
    res
      .status(201)
      .json({comment: comment, réponse: "Votre commentaire est ajouté"})
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
