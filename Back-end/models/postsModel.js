const {Model} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    "posts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text_content: {type: DataTypes.STRING, allowNull: true},
      media_content: {type: DataTypes.STRING, allowNull: true},
      // users_id: {type: DataTypes.INTEGER, allowNull: false},

      // createdAt: {type: DataTypes.DATE, allowNull: true},
    },
    {
      sequelize,
      modelName: "Posts",
    }
  )
  return Posts
}
