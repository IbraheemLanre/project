"use strict";

const Database = require("./Database");
const dotenv = require("dotenv");
dotenv.config();
const sql = require("./sqlstatement.json");
const getAllSql = sql.getAll.join(" ");
const countryInfoSql = sql.countryInfo.join(" ");
const viewInfoSql = sql.insertViewInfo.join(" ");
const getViewInfoSql = sql.getViewInfo.join(" ");

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

  insertViews(countryCode, views) {
    return new Promise(async (resolve, reject) => {
      try {
        const dateLastViewed = new Date();
        const result = await this.db.dbQueryConnection(viewInfoSql, [
          countryCode,
          views,
          dateLastViewed,
        ]);
        resolve(result.queryResult);
      } catch (err) {
        reject(err);
      }
    });
  }

  getViewInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.dbQueryConnection(getViewInfoSql);
        resolve(result.queryResult)
      } catch (err) {
        reject(err);
      }
    });
  }
}
module.exports = new DataStorage();
