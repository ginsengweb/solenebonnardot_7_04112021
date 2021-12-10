const {Op} = require("sequelize")
// const token = require("../middlewares/authToken")
const db = require("../models")
const fs = require("fs")
const {users} = require("../models")

const Post = db.posts
const User = db.users
const Comments = db.comments

const getAllPosts = async (req, res) => {
  try {
    Post.findAll({
      attributes: [
        "id",
        "text_content",
        "media_content",
        "createdAt",
        "users_id",
      ],
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: db.users,
          as: "users",
          attributes: ["prenom", "nom", "id"],
        },
        {
          model: db.comments,
          include: [
            {model: db.users, as: "users", attributes: ["nom", "prenom"]},
          ],
          as: "comments",
          attributes: ["id", "content", "post_id", "users_id", "createdAt"],
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
      attributes: ["nom", "prenom", "id"],
      where: {id: user_id},
    })
    if (user !== null) {
      if (req.file) {
        media_content = `htpp://localhost:4200/api/images/${req.file.filename}`
      } else {
        media_content = null
      }
      const post = await Post.create({
        users_id: user_id,
        text_content: req.body.text_content,
        media_content: req.body.media_content,
      })
      post.dataValues.users = user.dataValues
      console.log("log post", post)
      res.status(201).json({post: post})
    } else {
      res.status(400).json({réponse: "L'utilisateur n'existe pas"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
const deletePost = async (req, res) => {
  try {
    const post_id = req.body.id
    console.log("postid:", post_id)
    const post = await Post.findOne({where: {id: req.body.id}})
    console.log(post.users_id)
    if (post.media_content) {
      const filename = post.media_content.split("/images")[1]
      fs.unlink(`images/${filename}`, () => {
        Post.destroy({where: {id: req.body.id}})
        res.status(200).json({message: "Post supprimé"})
      })
    } else {
      Post.destroy({where: {id: post.id}}, {truncate: true})
      res.status(200).json({message: "Post supprimé"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
module.exports = {
  getAllPosts,
  createPost,
  deletePost,
}
