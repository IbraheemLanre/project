"use strict";

const Database = require("./Database");
const dotenv = require("dotenv");
dotenv.config();
const sql = require("./sqlstatement.json");
const getAllSql = sql.getAll.join(" ");

class DataStorage {
  constructor() {
    this.db = new Database({
      port: process.env.DB_PORT,
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.dbQueryConnection(getAllSql);
        resolve(result.queryResult);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new DataStorage();
