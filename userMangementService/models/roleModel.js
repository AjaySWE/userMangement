const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Sequelize instance
const Role = sequelize.define(
    "Role",
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.STRING },
    },
    { timestamps: true }
  );
  
  module.exports = Role;
  