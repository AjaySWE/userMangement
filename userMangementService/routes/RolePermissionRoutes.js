const express = require("express");
const RolePermissionController = require("../controllers/RolePermissionController");

const router = express.Router();

router.post("/", RolePermissionController.assignPermission);
router.get("/", RolePermissionController.getPermissions);
router.delete("/:id", RolePermissionController.revokePermission);

module.exports = router;
