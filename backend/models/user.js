import mysql from "../database/mysql.js";
import logger from "../loaders/logger.js";

export default {
  getAllUser: () => {
    return new Promise(async (resolve, rejects) => {
      let sql = "SELECT * FROM USER";

      let [row] = await mysql.query(sql);

      resolve(JSON.stringify(row));
    });
  }, // getAllUser end
};
