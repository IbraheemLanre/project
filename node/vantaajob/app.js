/**
 * Contains logic for backend data handling and api consumption
 * The idea here is to use cross-origin
 */
"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(app);

app.use(cors());

//route
app.get("/json", (req, res) =>
  fetch("http://gis.vantaa.fi/rest/tyopaikat/v1")
    .then((result) => result.json())
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
);

server.listen(port, host, () =>
  console.log(`Server localhost is ready and listening to port:${port}`)
);
