const {Op} = require("sequelize")
const token = require("../middlewares/auth")
const db = require("../models")
const fs = require("fs")
const {users} = require("../models")

const Post = db.posts
const User = db.users
const getAllPosts = async (req, res) => {
  try {
    Post.findAll({
      attributes: ["text_content", "media_content", "createdAt", "users_id"],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: db.users,
          as: "users",
          attributes: ["prenom", "nom", "id"],
        },
      ],
    }).then(posts => {
      console.log(res.body)
      console.log(posts.body)
      res.json(posts)
    })
  } catch (error) {
    return res.status(500).send({
      error: "Une erreur est survenue lors de la récupération des posts ",
    })
  }
}

const createPost = async (req, res) => {
  console.log(req.body)
  const user_id = req.body.user_id
  console.log(user_id)
  try {
    const user = await User.findOne({
      attributes: ["nom", "prenom"],
      where: {id: user_id},
    })
    if (user !== null) {
      const post = await Post.create({
        users_id: user_id,
        text_content: req.body.text_content,
        media_content: req.body.media_content,
      })
      res.status(201).json({post: post, réponse: "Votre post est ajouté"})
    } else {
      res.status(400).json({réponse: "L'utilisateur n'existe pas"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

module.exports = {
  getAllPosts,
  createPost,
}
