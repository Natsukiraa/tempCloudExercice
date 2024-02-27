const { Sequelize } = require('sequelize')
const dbUrl = process.env.dbUrl;



// database
const sequelize = new Sequelize(
    dbUrl,
  {
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
