"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const { port, host } = require("./config.json");

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

server.listen(
  port,
  host,
  () => `Server ${host} is up and running at port${port}`
);
