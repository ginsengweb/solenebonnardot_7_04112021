module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text_content: {type: DataTypes.STRING(500), allowNull: true},
    media_content: {type: DataTypes.BLOB, allowNull: true},
  })
  return Post
}
