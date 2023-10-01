import mysql from "mysql2/promise";
import config from "../config/index.js";
import logger from "../loaders/logger.js";

const db_config = config.mysql_config;

const pool = mysql.createPool({
  host: "localhost", //db_config.HOST,
  user: "root", //db_config.USER,
  port: "3306",
  password: "12345678", //db_config.PASSWORD,
  database: "esb", //db_config.DB,
  connectTimeout: 5000,
  connectionLimit: 30, //default 10
});
let conn = null;

try {
  conn = await pool.getConnection(async (conn) => conn);
} catch (e) {
  logger.error(e);
}

export default conn;
