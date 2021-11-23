const dbConfig = require("../config/db")

const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à la Base de Données")
  })
  .catch(err => {
    console.log("error" + err)
  })

const db = {}

db.Sequelize = sequelize

db.users = require("./usersModel")(sequelize, DataTypes)
db.posts = require("./postsModel")(sequelize, DataTypes)

// await sequelize.sync({force: true})
// console.log("All models were synchronized successfully.")

module.exports = db
