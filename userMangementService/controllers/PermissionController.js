const Permission = require("../models/Permission");

class PermissionController {
  static async createPermission(req, res, next) {
    try {
      const { name, description } = req.body;
      const permission = await Permission.create({ name, description });
      res.status(201).json({ message: "Permission created successfully", permission });
    } catch (error) {
      next(error);
    }
  }

  static async getPermissions(req, res, next) {
    try {
      const permissions = await Permission.findAll();
      res.status(200).json(permissions);
    } catch (error) {
      next(error);
    }
  }

  static async updatePermission(req, res, next) {
    try {
      const { id } = req.params;
      const permission = await Permission.findByPk(id);
      if (!permission) throw new Error("Permission not found.");
      await permission.update(req.body);
      res.status(200).json({ message: "Permission updated successfully", permission });
    } catch (error) {
      next(error);
    }
  }

  static async deletePermission(req, res, next) {
    try {
      const { id } = req.params;
      const permission = await Permission.findByPk(id);
      if (!permission) throw new Error("Permission not found.");
      await permission.destroy();
      res.status(200).json({ message: "Permission deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PermissionController;
