const db = require("../models/postsModel")

const Post = db.posts

const addPost = async (req, res) => {
  let postInfo = {
    text_content,
    media_content,
  }
  const post = await Post.create(postInfo)
  res.status(200).send(post)
}

const getAllPosts = async (req, res) => {
  let posts = await Post.findAll({
    attributes: ["text_content", "media_content"],
  })
  res.send(posts)
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
  addPost,
  getAllPosts,
  updatePost,
  deletePost,
}
