const {Op} = require("sequelize")
const db = require("../models")
const User = db.users
const Posts = db.posts

const updateUser = async (req, res) => {
  const id = req.body.id
  console.log("voici l'id", id)
  try {
    let user = await User.findOne({where: {id: id}})

    console.log("voici le user", user.dataValues)
    if (req.body.profilePicture) {
      user.profile_picture = req.body.profilePicture
    }
    if (req.body.email) {
      user.email = req.body.email
    }
    if (req.body.mini_bio) {
      user.mini_bio = req.body.mini_bio

      console.log("pas d eminibio", user.mini_bio)
    }
    if (req.body.prenom) {
      user.prenom = req.body.prenom

      console.log("voici le prénom", user.prenom)
    }
    if (req.body.nom) {
      user.nom = req.body.nom
      console.log("voici le nom", user.nom)
    }
    try {
      user.save({})

      console.log("i am new user", user)
      res.status(200).json({
        user: user,
        messageRetour: "Votre profil a bien été modifié",
      })
    } catch (error) {
      return res.status(500).send({error: "Erreur dans le .save"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
const deleteUser = async (req, res) => {
  try {
    const user_id = req.body.id
    console.log("userid:", user_id)
    const user = await User.findOne({where: {id: req.body.id}})
    if (user.profile_picture) {
      console.log("profilepicturelancé")
      const filename = user.profile_picture.split("/images")[1]
    }
    User.destroy({where: {id: user.id}})
    res.status(200).json({message: "Utilisateur supprimé"})
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}
module.exports = {
  updateUser,
  deleteUser,
}
