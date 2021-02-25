"use strict";

const Database = require("./Database");
const dotenv = require("dotenv");
dotenv.config();
const sql = require("./sqlstatement.json");
const getAllSql = sql.getAll.join(" ");
const countryInfoSql = sql.countryInfo.join(" ");
const viewSql = sql.insertInfo.join(" ");

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

  getCountryInfo(name) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.dbQueryConnection(countryInfoSql, [name]);
        resolve(result.queryResult);
      } catch (err) {
        reject(err);
      }
    });
  }

  getViews(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.dbQueryConnection(viewSql, [+id]);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new DataStorage();
