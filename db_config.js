const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.DEVELOPE_DB_USER, // Your database user
  host: process.env.DEVELOPE_DB_HOST, // Your database host
  database: process.env.DEVELOPE_DB_NAME, // Your database name
  password: process.env.DEVELOPE_DB_PASSWORD, // Your database password
  port: process.env.DEVELOPE_DB_PORT, // Your database port
});

module.exports = pool;
