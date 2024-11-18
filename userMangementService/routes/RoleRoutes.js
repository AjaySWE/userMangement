const express = require("express");
const RoleController = require("../controllers/RoleController");

const router = express.Router();

router.post("/", RoleController.createRole);
router.get("/", RoleController.getRoles);
router.put("/:id", RoleController.updateRole);
router.delete("/:id", RoleController.deleteRole);

module.exports = router;
