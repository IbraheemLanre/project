"use strict";

const http = require("http");
const path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "webpages"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("menu"));

// get all biodata post
app.get("/all", (req, res) => {
  const url = "http://localhost:8080";
  const result = fetch(url, { mode: "cors" });
  result
    .then((res) => res.json())
    .then((data) => res.render("allpages", { data }))
    .catch((err) => console.log(err));
});

// create a new bio data post
app.get("/newpostform", (req, res) =>
  res.render("form", {
    title: "Add New Bio Data",
    header: "Bio Data",
    action: "/newpost",
    name: { value: "", readonly: "" },
    age: { value: "", readonly: "" },
  })
);

app.post("/newpost", (req, res) => {
  const url = "http://localhost:8080/newpost";
  const options = {
    headers: { "Content-type": "application/json" },
    method: "POST",
    mode: "cors",
    body: JSON.stringify(req.body),
  };

  const result = fetch(url, options);
  result
    .then((res) => res.json())
    .then((data) => res.render("statuspage", { status: data }))
    .catch((err) => console.log(err));
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening to port:${port}`)
);
