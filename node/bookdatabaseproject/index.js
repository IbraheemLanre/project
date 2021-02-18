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

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("menu");
});

app.get("/all", (req, res) => {
  storage
    .getAll()
    .then((result) => res.render("allpages", { data: result }))
    .catch((error) => res.render("statuspage", { status: error }));
});

app.get("/getone", (req, res) =>
  res.render("getonepage", {
    title: "Get One",
    header: "Get",
    action: "/getone",
  })
);

app.post("/getone", async (req, res) => {
  try {
    const bookId = req.body.bookId;
    const searchedBook = await storage.get(bookId);
    res.render("bookpage", { data: searchedBook });
  } catch (error) {
    res.render("statuspage", { status: error });
  }
});

app.get("/insert", (req, res) => {
  res.render("form", {
    title: "Insert",
    header: "Add new book",
    action: "/insert",
    bookId: { value: "", readonly: "" },
    name: { value: "", readonly: "" },
    author: { value: "", readonly: "" },
    type: { value: "", readonly: "" },
    year: { value: "", readonly: "" },
  });
});

app.post("/insert", (req, res) => {
  storage
    .insert(req.body)
    .then((result) => res.render("statuspage", { status: result }))
    .catch((error) => res.render("statuspage", { status: error }));
});

app.get("/updateform", (req, res) => {
  res.render("form", {
    title: "Update",
    header: "Update book data",
    action: "/updatedata",
    bookId: { value: "", readonly: "" },
    name: { value: "", readonly: "readonly" },
    author: { value: "", readonly: "readonly" },
    type: { value: "", readonly: "readonly" },
    year: { value: "", readonly: "readonly" },
  });
});

app.post("/updatedata", async (req, res) => {
  try {
    const bookId = req.body.bookId;
    const result = await storage.get(bookId);
    if (result.message) {
      res.render("statuspage", { status: result });
    } else {
      res.render("form", {
        title: "Update",
        header: "Update book data",
        action: "/update",
        bookId: { value: result.bookId, readonly: "readonly" },
        name: { value: result.name, readonly: "" },
        author: { value: result.author, readonly: "" },
        type: { value: result.type, readonly: "" },
        year: { value: result.year, readonly: "" },
      });
    }
  } catch (error) {
    res.render("statuspage", { status: error });
  }
});

app.post("/update", (req, res) =>
  storage
    .update(req.body)
    .then((result) => res.render("statuspage", { status: result }))
    .catch((error) => res.render("statuspage", { status: error }))
);

server.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`Server ${process.env.HOST}:${process.env.PORT} is ready`)
);
