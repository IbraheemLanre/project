const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

// class DatabaseService {
//   databaseConfig = {};
//   connection = null;

//   coonstructor(envObj) {
//     this.databaseConfig = {
//       host: envObj.HOST,
//       user: envObj.USER,
//       password: envObj.PASSWORD,
//       database: envObj.DATABASE,
//       port: envObj.DB_PORT,
//     };
//   }

//   connect() {
//     this.connection = mysql.createConnection(this.databaseConfig);
//     this.connection.connect(console.log);
//   }

//   getAll(){}
// }

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  // console.log(`db ${connection.state}`);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAll() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM names;";

        connection.query(query, (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
      // console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async insertNewName(name) {
    try {
      const dateAdded = new Date();
      const insertId = await new Promise((resolve, reject) => {
        const query = "INSERT INTO names (name, date_added) VALUES (?,?);";

        connection.query(query, [name, dateAdded], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId);
        });
      });
      // console.log(insertId);
      return {
        id: insertId,
        name: name,
        dateAdded: dateAdded,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async deleteRåowById(id) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM names WHERE id= ?;";

        connection.query(query, [id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return response === 1 ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

module.exports = new DbService();