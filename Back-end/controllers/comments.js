// const dbc = require("../config/db")
// const db = dbc.dbPool()

// // CRUD
// // CREATE one comment
// // créer un objet ou tableau contenant id_post, text_post, user_id, user_name, date_heure_post
// //envoyer ces données à mysql
// // req sql create = INSERT INTO (check synthaxe)
// exports.createComment = async (req, res) => {
//   try {
//     const comment = req.body
//     const sqlCommand = "INSERT INTO comments SET ?" //comment relier ce commentaire avec le post ? check clé étrangère
//     db.query(sqlCommand, comment, (err, result) => {
//       res.status(201).json({message: "Commentaire posté avec succès !"})
//     })
//   } catch (err) {
//     res.status(200).json({message: "Echec du commentaire" + err})
//   }
// }
// // READ all comments
// exports.getAllComments = (req, res) => {
//   // récupérer tous les commentaires d'un post. Mais quel post ? const postId = req.param.id ?
//   // req sql READ = SELECT    '*' pour sélectionner tous les COMENTS d'un postId dans la table POSTS
// }
// // UPDATE one comment
// exports.modifyComment = (req, res) => {}
// // DELETE one comment
// exports.deleteComment = (req, res) => {}
// //
// //
