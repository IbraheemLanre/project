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
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
    });
  }
};

console.log(getAllSql);
console.log(getSql);
console.log(insertSql);
console.log(updateSql);
console.log(removeSql);
