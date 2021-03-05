"use strict";

const http = require("http");
const path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const cors = require('cors')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(app);
app.use(cors())

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "vantaajob.html"))
);

app.get("/json", (req, res) =>
  fetch("http://gis.vantaa.fi/rest/tyopaikat/v1")
    .then((result) => result.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
);

server.listen(port, host, () =>
  console.log(`Server ${host} is listening to port:${port}`)
);
