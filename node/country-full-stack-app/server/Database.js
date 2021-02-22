"use strict";

const mariadb = require("mariadb");

class Database {
  options = "";
  connection = "";
  constructor(options) {
    this.options = options;
  }

  dbQueryConnection(sql, connection) {
    return new Promise(async (resolve, reject) => {
      let isConnected = false;
      try {
        if (!connection) {
          connection = await mariadb.createConnection(this.options);
          isConnected = true;
        }

        let queryResult = await connection.query(sql);
        if (typeof queryResult.affectedRows === "undefined") {
          delete queryResult.meta;
          resolve({ queryResult, resultSet: true });
        } else {
          resolve({
            queryResult: {
              rowsChanged: queryResult.affectedRows,
              insertId: queryResult.insertId,
              status: queryResult.warningStatus,
            },
            resultSet: false,
          });
        }
      } catch (err) {
        reject(`Sql-error:${err}`);
      } finally {
        if (connection && isConnected) {
          connection.end();
        }
      }
    });
  }
}

module.exports = Database;
