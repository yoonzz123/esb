import mysql from "mysql2/promise";
import config from "../config/index.js";
import logger from "../loaders/logger.js";

const DB_MYSQL = config.mysql;

const pool = mysql.createPool({
  host: DB_MYSQL.HOST,
  user: DB_MYSQL.USER,
  password: DB_MYSQL.PASSWORD,
  port: DB_MYSQL.PORT,
  database: DB_MYSQL.DB,
  connectTimeout: 2000,
  connectionLimit: 30, //default 10
});
let conn = null;

try {
  conn = await pool.getConnection(async (conn) => conn);
} catch (e) {
  logger.error(e);
}

export default conn;
