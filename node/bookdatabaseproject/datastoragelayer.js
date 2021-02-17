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

module.exports = class DataStorage {
  constructor() {
    this.db = new Database({
      port: process.env.PORT,
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
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

  get(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getSql, [+id]);
        if (result.queryResult.length > 0) {
          resolve(result.queryResult[0]);
        } else {
          resolve({ status: `id ${id} not found` });
        }
      } catch (err) {
        reject(err);
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
        resolve({ status: "Insert OK" });
      } catch (err) {
        reject(err);
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
          resolve({ status: "Not updated" });
        } else {
          resolve({ status: "Update OK" });
        }
      } catch (err) {
        reject(err);
      }
    });
  } // update ends here

  remove(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(removeSql, [+id]);
        if (result.queryResult.rowsChanged === 1) {
          resolve({ status: "Remove OK" });
        } else {
          resolve({ status: `resource with ${id} not removed` });
        }
      } catch (err) {
        reject(err);
      }
    });
  } //end of remove
}; // class end
