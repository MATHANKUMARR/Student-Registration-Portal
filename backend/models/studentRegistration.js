const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
      student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      }
    });
  
    return Students;
  };