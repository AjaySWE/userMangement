// const { Sequelize } = require("sequelize");
// const config = require("./dbConfig");
// console.log("config",config)

// // Securely access environment variables
// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = config.db;
// console.log("DB_PASSWORD",DB_PASSWORD)
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST || "localhost",
//   port: DB_PORT || 3306,
//   dialect: "mysql",
//   dialectOptions: {
//     connectTimeout: 60000, // Prevent timeouts on slow connections
//   },
//   logging: process.env.NODE_ENV === "development" ? console.log : false, // Conditional logging for development
// });

// module.exports = sequelize;
const { Sequelize } = require("sequelize");
const config = require("./dbConfig");
const { host, port, user, password, database } = config.db;
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 60000,
  },
  // logging: true,
});
module.exports = sequelize;