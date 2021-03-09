"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const { port, host } = require("./config.json");
const API_URL = "http://localhost:4000/superheroes";

const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "webpages"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("menu"));

app.get("/all", async (req, res) => {
  try {
    const result = await fetch(API_URL, { mode: "cors" });
    const data = await result.json();
    res.render("allpages", { data });
  } catch (err) {
    fetchError(res);
  }
});

// app.route()

server.listen(port, host, () => console.log(`Server ${host}:${port} is ready`));

function fetchError(res) {
  const status = { message: "failed to fetch", type: "error" };
  res.render("statuspage", { status });
}
