module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text_content: {type: DataTypes.STRING(500), allowNull: true},
    media_content: {type: DataTypes.STRING, allowNull: true}, //string parceque ce ser l'URL de l'image que je mettrai dans un dossier
  })
  return Post
}
