const http = require("http");
const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const port = process.env.PORT;
const host = process.env.HOST;
let db_host = process.env.DB_HOST;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect("mongodb+srv://team5:teliateam5@cluster0.bqo7c.mongodb.net/backend_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
    init();
  })
  .catch((err) => {
    console.log("Connection error", err);
    process.exit();
  });

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("TELIA PROJECT TEAM 5 - BACKEND");
});

server.listen(port, host, () => {
  console.log(`Server ${host} is up and running on port:${port}`);
});

const init = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "employee",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log(`Added 'employee' to roles collection`);
      });

      new Role({
        name: "employer",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log(`Added 'employer' to roles collection`);
      });
    }
  });
};
