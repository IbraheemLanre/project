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

app.get("/deletepost", (req, res) =>
  res.render("getform", {
    title: "Delete Bio Data",
    header: "Delete Bio Data",
    action: "/remove",
  })
);

app.post("/remove", (req, res) => {
  const bioId = req.body.bioId;
  const url = `http://localhost:8080/remove/${bioId}`;
  const options = {
    headers: { "Content-type": "application/json" },
    method: "DELETE",
    mode: "cors",
  };

  const result = fetch(url, options);
  result
    .then((res) => res.json())
    .then((data) => res.render("statuspage", { status: data }))
    .catch((err) => console.log(err));
});

app.get("/updatepost", (req, res) => {
  res.render("form", {
    title: "Update Bio Data",
    header: "Bio Data",
    action: "/updatedata",
    name: { value: "", readonly: "" },
    age: { value: "", readonly: "readonly" },
  });
});

app.post("/updatedata", (req, res) => {
  const name = req.body.name;
  const url = `http://localhost:8080/update${name}`;

  const result = fetch(url, { mode: "cors" });
  result
    .then((res) => res.json())
    .then(
      res.render("form", {
        title: "Update Bio Data",
        header: "Bio Data",
        action: "/update",
        name: { value: "", readonly: "readonly" },
        age: { value: "", readonly: "" },
      })
    )
    .catch((err) => console.log(err));
});

app.post("/update", async (req, res) => {
  try {
    const name = req.body.name;
    const url = `http://localhost:8080/update/${name}`;
    const options = {
      headers: { "Content-type": "application/json" },
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(req.body),
    };
    const result = await fetch(url, options);
    const data = await result.json();
    res.render("statuspage", { status: data });
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, host, () =>
  console.log(`Server ${host} is listening to port:${port}`)
);
