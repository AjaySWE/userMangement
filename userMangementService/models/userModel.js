const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Sequelize instance

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = User;
