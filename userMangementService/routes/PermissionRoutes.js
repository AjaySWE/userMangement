const express = require("express");
const PermissionController = require("../controllers/PermissionController");

const router = express.Router();

router.post("/", PermissionController.createPermission);
router.get("/", PermissionController.getPermissions);
router.put("/:id", PermissionController.updatePermission);
router.delete("/:id", PermissionController.deletePermission);

module.exports = router;