const express = require("express");
const UserRoutes = require("./routes/UserRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json()); // Parse JSON requests
app.use("/api/users", UserRoutes); // Register user routes
app.use(errorHandler); // Global error handler

module.exports = app;
