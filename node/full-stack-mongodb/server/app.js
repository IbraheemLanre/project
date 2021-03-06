"use strict";

const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const host = process.env.LOCAL_DB;

const server = http.createServer(app);

app.get("/", (req, res) => res.send("Hello World"));

server.listen(port, () =>
  console.log(`Server is up and running at port ${port}`)
);
