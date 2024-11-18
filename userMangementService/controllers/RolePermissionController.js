const RolePermission = require("../models/RolePermission");
const Permission = require("../models/Permission");

class RolePermissionController {
  static async assignPermission(req, res, next) {
    try {
      const { roleId, moduleId, pageId, permissionId } = req.body;

      // Validate existence of the entities
      const permission = await Permission.findByPk(permissionId);
      if (!permission) throw new Error("Permission not found.");

      const exists = await RolePermission.findOne({
        where: { roleId, moduleId, pageId, permissionId },
      });
      if (exists) throw new Error("Permission already assigned.");

      const rolePermission = await RolePermission.create({
        roleId,
        moduleId,
        pageId,
        permissionId,
      });
      res.status(201).json({ message: "Permission assigned successfully", rolePermission });
    } catch (error) {
      next(error);
    }
  }

  static async getPermissions(req, res, next) {
    try {
      const permissions = await RolePermission.findAll({
        include: ["Role", "Module", "Page", "Permission"],
      });
      res.status(200).json(permissions);
    } catch (error) {
      next(error);
    }
  }

  static async revokePermission(req, res, next) {
    try {
      const { id } = req.params;
      const rolePermission = await RolePermission.findByPk(id);
      if (!rolePermission) throw new Error("Permission not found.");
      await rolePermission.destroy();
      res.status(200).json({ message: "Permission revoked successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RolePermissionController;
