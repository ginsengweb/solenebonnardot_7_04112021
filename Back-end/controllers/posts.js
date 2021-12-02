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
    }).then(posts => {
      res.json(posts)
    })
  } catch (error) {
    return res.status(500).send({
      error: "Une erreur est survenue lors de la récupération des posts ",
    })
  }
}

const createPost = async (req, res) => {
  const userId = token.getUserId(req)
  let imageUrl
  try {
    const user = await db.User.findOne({
      attributes: ["nom", "prenom"],
      where: {id: userId},
    })
    if (user !== null) {
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get("host")}/api/upload/${
          req.file.filename
        }`
      } else {
        imageUrl = null
      }
      const post = await db.Post.create({
        include: [
          {
            model: db.User,
            attributes: ["nom", "prenom"],
          },
        ],
        text_content: req.body.text_content,
        media_content: req.body.media_content,
      })

      res.status(201).json({post: post, messageRetour: "Votre post est ajouté"})
    } else {
      res.status(400).send({error: "Erreur "})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
const updatePost = async (req, res) => {
  let id = req.params.id
  const post = await Post.update(req.body, {where: {id: id}})
  res.status(200).send(post)
}

const deletePost = async (req, res) => {
  let id = req.params.id
  await Post.destroy({where: {id: id}})
  res.status(200).send("Votre post a bien été supprimé")
}

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
}
