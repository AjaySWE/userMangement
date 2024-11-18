const Role = require("../models/Role");
const RolePermission = require("../models/RolePermission");

class RoleController {
  static async createRole(req, res, next) {
    try {
      const role = await Role.create(req.body);
      res.status(201).json(role);
    } catch (error) {
      next(error);
    }
  }

  static async getRoles(req, res, next) {
    try {
      const roles = await Role.findAll();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  }

  static async updateRole(req, res, next) {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id);
      if (!role) throw new Error("Role not found.");
      await role.update(req.body);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  }

  static async deleteRole(req, res, next) {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id);
      if (!role) throw new Error("Role not found.");
      await role.destroy();
      res.status(200).json({ message: "Role deleted successfully." });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoleController;
