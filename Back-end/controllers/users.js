const {Op} = require("sequelize")
const db = require("../models")
const User = db.users
const Posts = db.posts

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {id: req.params.id},
    })
    res.status(200).send(user)
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

const updateUser = async (req, res) => {
  const id = req.params.id
  try {
    const users_id = token.getUserId(req)
    let newPhoto
    let user = await db.User.findOne({where: {id: id}}) // on trouve le user
    if (users_id === user.id) {
      if (req.file && user.photo) {
        newPhoto = `${req.protocol}://${req.get("host")}/api/upload/${
          req.file.filename
        }`
        const filename = user.photo.split("/upload")[1]
        fs.unlink(`upload/${filename}`, err => {
          // s'il y avait déjà une photo on la supprime
          if (err) console.log(err)
          else {
            console.log(`Deleted file: upload/${filename}`)
          }
        })
      } else if (req.file) {
        newPhoto = `${req.protocol}://${req.get("host")}/api/upload/${
          req.file.filename
        }`
      }
      if (newPhoto) {
        user.photo = newPhoto
      }
      if (req.body.bio) {
        user.bio = req.body.bio
      }
      if (req.body.pseudo) {
        user.pseudo = req.body.pseudo
      }
      const newUser = await user.save({fields: ["pseudo", "bio", "photo"]}) // on sauvegarde les changements dans la bdd
      res.status(200).json({
        user: newUser,
        messageRetour: "Votre profil a bien été modifié",
      })
    } else {
      res.status(400).json({messageRetour: "Vous n'avez pas les droits requis"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
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
