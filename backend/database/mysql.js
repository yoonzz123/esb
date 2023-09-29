import mysql from "mysql2/promise";
import config from "../config/index.js";

const db_config = config.mysql_config;

const pool = mysql.createPool({
  host: db_config.HOST,
  user: db_config.USER,
  password: db_config.PASSWORD,
  database: db_config.DB,
  connectTimeout: 5000,
  connectionLimit: 30, //default 10
});

export default pool;
