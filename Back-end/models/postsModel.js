const {Model} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      models.Posts.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "CASCADE",
      })
    }
  }
  Posts.init(
    {
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
