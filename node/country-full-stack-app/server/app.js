"use strict";

const http = require("http");
const express = require("express");
const dotenv = require('dotenv')
dotenv.config()
const app = express();

const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server ${process.env.HOST} is listening to port:${process.env.PORT}`
  );
});
