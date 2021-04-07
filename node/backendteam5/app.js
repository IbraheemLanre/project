const http = require("http");
const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const port = process.env.PORT;
const host = process.env.HOST;
const DB_HOST = process.env.DB_HOST;
const cors = require("cors");
const { Server } = require("mongodb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
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
