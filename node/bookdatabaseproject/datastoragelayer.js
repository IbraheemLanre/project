"use strict";

const Database = require("./database");
const sql = require("./sqlstatement.json");
const { placeholderValues } = require("./parameters");
const getAllSql = sql.getAll.join(" ");
const getSql = sql.get.join(" ");
const insertSql = sql.insert.join(" ");
const updateSql = sql.update.join(" ");
const removeSql = sql.remove.join(" ");
const dotenv = require("dotenv");
dotenv.config();

class DataStorage {
  constructor() {
    this.db = new Database({
      port: process.env.PORT,
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
    });
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getAllSql);
        resolve(result.queryResult);
      } catch (err) {
        reject(err);
      }
    });
  } // end of getAll
}; // class end

const db = new DataStorage();
db.getAll().then(console.log).catch(console.log);
