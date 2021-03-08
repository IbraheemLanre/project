"use strict";

const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const DataStorage = require("./storage/datastoragelayer");
const db = new DataStorage();
const { CODES, MESSAGES } = require("./statusCodes");
const { port, host,resource, idKey } = require("./configREST.json");

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get(`/${resource}`, (req, res) =>
  db
    .getAll()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
);

server.listen(
  port,
  host,
  () => `Server ${host} is up and running at port${port}`
);
