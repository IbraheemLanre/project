"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const Datastorage = require("./datastoragelayer");
const storage = new Datastorage();

const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "webpages"));

app.get("/", (req, res) => {
  res.render("menu");
});

app.get("/all", (req, res) => {
  storage
    .getAll()
    .then((result) => res.render("allpages", { data: result }))
    .catch((error) => res.render("statuspage", { status: error }));
});

server.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`Server ${process.env.HOST}:${process.env.PORT} is ready`)
);
