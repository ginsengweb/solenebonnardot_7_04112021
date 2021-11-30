const {Model} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {type: DataTypes.STRING(100), allowNull: true},
      prenom: {type: DataTypes.STRING(100), allowNull: true},
      email: {type: DataTypes.STRING, allowNull: false, unique: true},
      password: {type: DataTypes.STRING, allowNull: false, unique: true},
      profile_picture: {type: DataTypes.BLOB, allowNull: true}, //string cf posts model
      mini_bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  )
  return Users
}
