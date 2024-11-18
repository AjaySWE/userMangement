const dotenv = require("dotenv");
require("dotenv").config();
const app = require("./app");

const sequelize = require("./configs/sequelizeconnect");
const db=require("./configs/dbConfig")
db

const PORT = process.env.PORT || 3000;


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");
    await sequelize.sync(); // Sync models (optional for production)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
})();
