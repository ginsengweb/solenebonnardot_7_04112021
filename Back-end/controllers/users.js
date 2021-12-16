const db = require("../models")

//  import model DB
const User = db.users

// ********* MODIFY *************
const updateUser = async (req, res) => {
  try {
    let user = await User.findOne({where: {id: req.body.id}})
    console.log("User trouvé : ", user.dataValues)
    if (req.body.email) {
      user.email = req.body.email
      console.log("Ancien email : ", user.email)
    }
    if (req.body.prenom) {
      user.prenom = req.body.prenom
      console.log("Ancien prénom : ", user.prenom)
    }
    if (req.body.nom) {
      user.nom = req.body.nom
      console.log("Ancien nom : ", user.nom)
    }
    try {
      user.save({})
      console.log("New userInfo : ", user)
      res.status(200).json({
        user: user,
        messageRetour: "Votre profil a bien été modifié",
      })
    } catch (error) {
      return res
        .status(500)
        .send({error: "Erreur lors de la mise à jour de votre proifl"})
    }
  } catch (error) {
    return res.status(500).send({error: "Erreur serveur"})
  }
}

// ******************* DELETE **********************
const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({where: {id: req.body.id}})
    console.log("User to delete : ", user.dataValues)
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
