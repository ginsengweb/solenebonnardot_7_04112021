module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
  })
  return User
}
// foreign keys : les relations vont faire les sconnexions automatiquement (one to many/one, etc.)
// CHECK comment créer relations avec séquelize qui va créer les clé lui-même(ce sera surtout id.user puisque user va surtout faire les actions)
