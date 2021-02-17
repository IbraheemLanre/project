"use strict";

const Database = require("./database");
const sql = require("./sqlstatement.json");
const { placeholderValues } = require("./parameters");
const { CODES, MESSAGES } = require("./statusCodes");
const getAllSql = sql.getAll.join(" ");
const getSql = sql.get.join(" ");
const insertSql = sql.insert.join(" ");
const updateSql = sql.update.join(" ");
const removeSql = sql.remove.join(" ");
const dotenv = require("dotenv");
dotenv.config();

module.exports = class DataStorage {
  constructor() {
    this.db = new Database({
      port: process.env.DB_PORT,
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
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

  get(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getSql, [+id]);
        if (result.queryResult.length > 0) {
          resolve(result.queryResult[0]);
        } else {
          resolve(MESSAGES.NOT_FOUND("bookId", id));
        }
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } // get ends here

  insert(resource) {
    return new Promise(async (resolve, reject) => {
      try {
        const status = await this.db.doQuery(
          insertSql,
          placeholderValues(resource)
        );
        resolve(MESSAGES.INSERT_OK("bookId", resource.bookId));
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } // insert ends here

  update(resource) {
    return new Promise(async (resolve, reject) => {
      try {
        const status = await this.db.doQuery(
          updateSql,
          placeholderValues(resource)
        );
        if (status.queryResult.rowsChanged === 0) {
          resolve(MESSAGES.NOT_UPDATED());
        } else {
          resolve(MESSAGES.UPDATE_OK("bookId", resource.bookId));
        }
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } // update ends here

  remove(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(removeSql, [+id]);
        if (result.queryResult.rowsChanged === 1) {
          resolve(MESSAGES.DELETE_OK("bookId", id));
        } else {
          resolve(MESSAGES.NOT_DELETED("bookId", id));
        }
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } //end of remove
}; // class end
