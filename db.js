const { Sequelize } = require('sequelize')
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASSWORD;




// database
const sequelize = new Sequelize(
    dbName, // Database name
    dbUser, // User
    dbPwd, // Password
  {
    host: '', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
