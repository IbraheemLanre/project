"use strict";

const http = require("http");
const cors = require('cors')
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const storage = require("./datastoragelayer");

const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/getall", (req, res) => {
  storage
    .getAll()
    .then((result) => res.json({data:result}))
    .catch((err) => res.json(err));
});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server ${process.env.HOST} is listening to port:${process.env.PORT}`
  );
});
