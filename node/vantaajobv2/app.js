"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(app);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "vantaajob.html"))
);

server.listen(port, host, () =>
  console.log(`Server ${host} is listening to port:${port}`)
);
