const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to DB');
  })
  .catch((error) => {
    console.log('Error' + error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// create Table
db.users = require('../model/userModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done!');
});

module.exports = db;
