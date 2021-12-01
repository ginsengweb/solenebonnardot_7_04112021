const {Op} = require("sequelize")
const db = require("../models")
const User = db.users
const Posts = db.posts

const getOneUser = async (req, res) => {
  const data = await User.findAll({
    include: [
      {
        model: Posts,
        as: "posts",
      },
    ],
  })
  res.status(200).send(data)
  console.log(data)
}

const updateUser = async (req, res) => {
  let id = req.params.id
  const user = await User.update(req.body, {where: {id: id}})
  res.status(200).send(user)
}

const deleteUser = async (req, res) => {
  let id = req.params.id
  await User.destroy({where: {id: id}})
  res.status(200).send("user deleted")
}

module.exports = {
  getOneUser,
  updateUser,
  deleteUser,
}
