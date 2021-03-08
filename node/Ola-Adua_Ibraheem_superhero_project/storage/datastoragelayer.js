"use strict";

const Database = require("./database");
const options = require("./databaseopetions.json");
const sql = require("./sqlstatement.json");
const { toArrayInsert, toArrayUpdate } = require("./parameters");
const { CODES, MESSAGES } = require("../statusCodes");
const getAllSql = sql.getAll.join(" ");
const getSql = sql.get.join(" ");
const insertSql = sql.insert.join(" ");
const updateSql = sql.update.join(" ");
const removeSql = sql.remove.join(" ");
const PRIMARY_KEY = sql.primaryKey;

module.exports = class DataStorage {
  constructor() {
    this.db = new Database(options);
  }

  get CODES() {
    return CODES;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getAllSql);
        resolve(result.queryResult);
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } // end of getAll
};
