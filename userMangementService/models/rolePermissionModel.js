
const { DataTypes } = require('sequelize');
const sequelize = require('../configs/sequelizeconnect'); // Sequelize instance
const RolePermission = sequelize.define(
    "RolePermission",
    {},
    { timestamps: true }
  );
  
  RolePermission.belongsTo(Role, { foreignKey: "roleId", onDelete: "CASCADE" });
  RolePermission.belongsTo(Module, { foreignKey: "moduleId", onDelete: "CASCADE" });
  RolePermission.belongsTo(Page, { foreignKey: "pageId", onDelete: "CASCADE" });
  RolePermission.belongsTo(Permission, { foreignKey: "permissionId", onDelete: "CASCADE" });
  
  module.exports = RolePermission;
             