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

app
  .route("/getone")
  .get((req, res) => {
    res.render("getform", {
      title: "Get",
      header: "Get Superhero",
      action: "/getone",
    });
  })
  .post(async (req, res) => {
    try {
      const heroId = req.body.heroId;
      const result = await fetch(API_URL + "/" + heroId, { mode: "cors" });
      const data = await result.json();
      res.render("superheropage", { data });
    } catch (err) {
      fetchError(res);
    }
  });

app
  .route("/remove")
  .get((req, res) =>
    res.render("getform", {
      title: "Remove",
      header: "Remove",
      action: "/remove",
    })
  )
  .post(async (req, res) => {
    try {
      const heroId = req.body.heroId;
      const options = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        mode: "cors",
      };
      const result = await fetch(API_URL + "/" + heroId, options);
      const data = await result.json();
      res.render("statuspage", { status: data });
    } catch (err) {
      fetchError(res);
    }
  });

app.get("/insertform", (req, res) =>
  res.render("form", {
    title: "Add a superhero",
    header: "Superhero Data",
    action: "/insert",
    heroId: { value: "", readonly: "" },
    name: { value: "", readonly: "" },
    yearOfBirth: { value: "", readonly: "" },
    superproperty: { value: "", readonly: "" },
    costume: { value: "", readonly: "" },
  })
);

app.post("/insert", async (req, res) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(req.body),
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    };
    const result = await fetch(API_URL, options);
    const data = await result.json();
    res.render("statuspage", { status: data });
  } catch (err) {
    fetchError(res);
  }
});

app.get("/updateform", (req, res) =>
  res.render("form", {
    title: "Update a superhero",
    header: "Superhero Data",
    action: "/updatedata",
    heroId: { value: "", readonly: "" },
    name: { value: "", readonly: "readonly" },
    yearOfBirth: { value: "", readonly: "readonly" },
    superproperty: { value: "", readonly: "readonly" },
    costume: { value: "", readonly: "readonly" },
  })
);

app.post("/updatedata", async (req, res) => {
  try {
    const heroId = req.body.heroId;
    const result = await fetch(API_URL + "/" + heroId, {
      mode: "cors",
    });
    const data = await result.json();
    if (data.message) {
      res.render("statuspage", { status: data });
    } else {
      res.render("form", {
        title: "Update a superhero",
        header: "Superhero Data",
        action: "/update",
        heroId: { value: data.heroId, readonly: "readonly" },
        name: { value: data.name, readonly: "" },
        yearOfBirth: { value: data.yearOfBirth, readonly: "" },
        superproperty: { value: data.superproperty, readonly: "" },
        costume: { value: data.costume, readonly: "" },
      });
    }
  } catch (error) {
    fetchError(res);
  }
});

app.post("/update", async (req, res) => {
  try {
    const heroId = req.body.heroId;
    const options = {
      method: "PUT",
      body: JSON.stringify(req.body),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await fetch(API_URL + "/" + heroId, options);
    const data = await result.json();
    res.render("statuspage", { status: data });
  } catch (error) {
    fetchError(res);
  }
});

server.listen(port, host, () => console.log(`Server ${host}:${port} is ready`));

function fetchError(res) {
  const status = { message: "failed to fetch", type: "error" };
  res.render("statuspage", { status });
}
