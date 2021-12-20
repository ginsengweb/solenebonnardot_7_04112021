const db = require("../models")
const fs = require("fs")

// import DB models
const Post = db.posts
const User = db.users
const Comments = db.comments

// ********** GET *************
const getAllPosts = async (req, res) => {
  try {
    Post.findAll({
      attributes: ["id", "text_content", "imageUrl", "createdAt", "users_id"],
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
      console.log("Posts : ", posts)
      res.json(posts)
    })
  } catch (error) {
    return res.status(500).send({
      error: "Une erreur est survenue lors de la récupération des posts ",
    })
  }
}

//  ************* CREATE  ************************
const createPost = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["nom", "prenom", "id"],
      where: {id: req.body.user_id},
    })
    if (user !== null) {
      console.log("user : ", user)
      let imageUrl
      if (req.file) {
        console.log("filename : ", req.file.filename)
        imageUrl = `http://localhost:4200/api/upload/${req.file.filename}`
      } else {
        imageUrl = null
      }
      const post = await Post.create({
        users_id: req.body.user_id,
        text_content: req.body.text_content,
        imageUrl: imageUrl,
      })
      post.dataValues.users = user.dataValues
      console.log("Post créé : ", post.dataValues)
      res.status(201).json({post: post})
    } else {
      res.status(400).json({réponse: "L'utilisateur n'existe pas"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

//  ****************  DELETE  *********************
const deletePost = async (req, res) => {
  try {
    const post = await Post.findOne({where: {id: req.body.id}})
    console.log("Post trouvé : ", post)
    if (post.imageUrl) {
      const filename = post.imageUrl.split("/upload")[1]
      console.log("Filename to Delete: ", filename)
      fs.unlink(`upload/${filename}`, () => {
        Post.destroy({where: {id: req.body.id}})
        res.status(200).json({message: "Post et image supprimé"})
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
