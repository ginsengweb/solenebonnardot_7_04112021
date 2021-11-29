const {Model} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate({Users}) {
      Posts.belongsToMany(Users, {
        foreignKey: {
          type: DataTypes.INTEGER,
        },
        allowNull: false,
      })
    }
  }
  Posts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text_content: {type: DataTypes.STRING, allowNull: true},
      media_content: {type: DataTypes.STRING, allowNull: true},
    },
    {
      sequelize,
      modelName: "Posts",
    }
  )
  return Posts
}
