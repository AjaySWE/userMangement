const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Sequelize instance
const Permission = sequelize.define('Permission', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { timestamps: true });
  
  module.exports = Permission;
  