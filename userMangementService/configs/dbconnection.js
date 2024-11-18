const { Sequelize } = require("sequelize");
const sequelize = require("./sequelizeconnect");

module.exports = db = {};

initialize();

async function initialize() {
  // Import models
  const User = require("../models/User");
  const Role = require("../models/Role");
  const Module = require("../models/Module");
  const Page = require("../models/Page");
  const Permission = require("../models/Permission");
  const RolePermission = require("../models/RolePermission");

  // Add models to the `db` object for global access
  db.User = User;
  db.Role = Role;
  db.Module = Module;
  db.Page = Page;
  db.Permission = Permission;
  db.RolePermission = RolePermission;

  // Define relationships
  Role.hasMany(User, { foreignKey: "roleId" });
  User.belongsTo(Role, { foreignKey: "roleId" });

  Module.hasMany(Page, { foreignKey: "moduleId" });
  Page.belongsTo(Module, { foreignKey: "moduleId" });

  RolePermission.belongsTo(Role, { foreignKey: "roleId" });
  RolePermission.belongsTo(Module, { foreignKey: "moduleId" });
  RolePermission.belongsTo(Page, { foreignKey: "pageId" });
  RolePermission.belongsTo(Permission, { foreignKey: "permissionId" });

  // Sync all models with the database
  await sequelize.sync({ alter: true });

  console.log("All models were synchronized successfully.");
}
