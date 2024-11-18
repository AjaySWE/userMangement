const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Sequelize instance
const Page = sequelize.define('Page', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
  },
  { timestamps: true });
  
  Page.belongsTo(Module, { foreignKey: "moduleId", onDelete: "CASCADE" });
  
  module.exports = Page;
  