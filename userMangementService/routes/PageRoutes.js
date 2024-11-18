const express = require("express");
const PageController = require("../controllers/PageController");

const router = express.Router();

router.post("/", PageController.createPage);
router.get("/", PageController.getPages);
router.put("/:id", PageController.updatePage);
router.delete("/:id", PageController.deletePage);

module.exports = router;
