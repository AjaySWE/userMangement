const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/", UserController.createUser); // Create a user
router.get("/", UserController.getAllUsers); // Get all users
router.get("/:id", UserController.getUserById); // Get a user by ID
router.put("/:id", UserController.updateUser); // Update a user by ID
router.delete("/:id", UserController.deleteUser); // Delete a user by ID

module.exports = router;
