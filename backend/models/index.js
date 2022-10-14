const dbConfig = require("../DBConfig/Database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.students = require("./studentRegistration.js")(sequelize, Sequelize);

module.exports = database;