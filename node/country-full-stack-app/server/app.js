"use strict";

const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const storage = require("./datastoragelayer");

const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
2;

app.get("/getall", (req, res) => {
  storage
    .getAll()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server ${process.env.HOST} is listening to port:${process.env.PORT}`
  );
});
