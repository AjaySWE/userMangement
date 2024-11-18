const express = require("express");
const ModuleController = require("../controllers/ModuleController");

const router = express.Router();

router.post("/", ModuleController.createModule);
router.get("/", ModuleController.getModules);
router.put("/:id", ModuleController.updateModule);
router.delete("/:id", ModuleController.deleteModule);

module.exports = router;
