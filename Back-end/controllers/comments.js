// CRUD
// CREATE one comment
exports.createComment = (req, res) => {
  // créer un objet ou tableau contenant id_post, text_post, user_id, user_name, date_heure_post
  //envoyer ces données à mysql
  // req sql create = INSERT INTO (check synthaxe)
}
// READ all comments
exports.getAllComments = (req, res) => {
  // récupérer tous les commentaires d'un post. Mais quel post ? const postId = req.param.id ?
  // req sql READ = SELECT    '*' pour sélectionner tous les COMENTS d'un postId dans la table POSTS
}
// UPDATE one comment
exports.modifyComment = (req, res) => {}
// DELETE one comment
exports.deleteComment = (req, res) => {}
//
//
