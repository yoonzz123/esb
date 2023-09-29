import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import logger from "../loaders/logger.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  logger.info("production mode");
  dotenv.config({ path: path.join(__dirname, "../env/.env.production") });
} else if (process.env.NODE_ENV === "development") {
  logger.info("development mode");
  dotenv.config({ path: path.join(__dirname, "../env/.env.development") });
} else {
  // 임시 로드용
  logger.info("---production mode---");
  dotenv.config({ path: path.join(__dirname, "../env/.env.production") });
  // throw new Error("Couldn't find .env file");
}

export default {
  server_port: process.env.PORT, //서버 포트
  api: {
    prefix: "/", //라우터 접두사 ( localhost:5000/api로 기본설정 원할 시-> '/api' 설정하면됨)
  },
  //DB config
  mysql_config: {
    HOST: process.env.MYSQL_HOST,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_PASSWORD,
    dialect: "mysql",
    DB: process.env.MYSQL_DATABASE,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
