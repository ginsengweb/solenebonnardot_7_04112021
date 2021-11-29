// const db = require("../models")
// const bcrypt = require("bcrypt")
const {Op} = require("sequelize")
// const jwt = require("jsonwebtoken")

// const addPost = async (req, res) => {
//   let postInfo = {
//     text_content,
//     media_content,
//   }
//   const post = await Post.create(postInfo)
//   res.status(200).send(post)
// }

// const getAllPosts = async (req, res) => {
//   Post.findAll().then(posts => {
//     res.json(posts)
//   })
// }

// const token = require("../middlewares/auth")
const db = require("../models")
const fs = require("fs")

const Post = db.posts
const User = db.users
module.exports.getAllPosts = async (req, res) => {
  try {
    Post.findAll({
      attributes: ["text_content", "media_content", "createdAt", "user_id"],
      // order: [["createdAt", "DESC"]],
      // include: [User],
    }).then(posts => {
      res.json(posts)
    })
  } catch (error) {
    return res.status(500).send({
      error: "Une erreur est survenue lors de la récupération des posts ",
    })
  }
}
//
//     const posts = await Post.findAll({
//       attributes: ["text_content", "media_content", "createdAt"],
//       order: [["createdAt", "DESC"]],
//       include: [
//         {
//           model: User,
//           attributes: ["nom", "prenom", "id"],
//         },
//       ],
//     })
//     res.status(200).send(posts)

// }

// module.exports.createPost = async (req, res) => {
//   const userId = token.getUserId(req)
//   let imageUrl
//   try {
//     const user = await db.User.findOne({
//       attributes: ["nom", "prenom"],
//       where: {id: userId},
//     })
//     if (user !== null) {
//       if (req.file) {
//         imageUrl = `${req.protocol}://${req.get("host")}/api/upload/${
//           req.file.filename
//         }`
//       } else {
//         imageUrl = null
//       }
//       const post = await db.Post.create({
//         include: [
//           {
//             model: db.User,
//             attributes: ["nom", "prenom"],
//           },
//         ],
//         text_content: req.body.text_content,
//         media_content: req.body.media_content,
//       })

//       res.status(201).json({post: post, messageRetour: "Votre post est ajouté"})
//     } else {
//       res.status(400).send({error: "Erreur "})
//     }
//   } catch (error) {
//     return res.status(500).send({error: "Erreur serveur"})
//   }
// }
// module.exports.updatePost = async (req, res) => {
//   let id = req.params.id
//   const post = await Post.update(req.body, {where: {id: id}})
//   res.status(200).send(post)
// }

// module.exports.deletePost = async (req, res) => {
//   let id = req.params.id
//   await Post.destroy({where: {id: id}})
//   res.status(200).send("Votre post a bien été supprimé")
// }
