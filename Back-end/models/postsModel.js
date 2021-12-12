"use strict"
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
      imageUrl: {type: DataTypes.STRING, allowNull: true},
      users_id: {type: DataTypes.INTEGER, allowNull: false},
    },
    {
      sequelize,
      modelName: "Posts",
    }
  )
  return Posts
}
