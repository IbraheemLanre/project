"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const { port, host } = require("./config.json");

const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "webpages"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("menu"));

server.listen(port, host, () => console.log(`Server ${host}:${port} is ready`));
