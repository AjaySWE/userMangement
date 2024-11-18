const env = process.env;
console.log("process.env.PORT",process.env.DB_PASSWORD)
const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Ruky@12345",
    database: process.env.DB_NAME || "userManagement",
    multipleStatements: true,
  },
  // mail: env.mailbaseURL,
  //listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
