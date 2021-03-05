"use strict";

const http = require("http");
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer(app);
app.use(cors());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "vantaajob.html"))
);

server.listen(port, host, () => console.log(`Server is up and running`));
