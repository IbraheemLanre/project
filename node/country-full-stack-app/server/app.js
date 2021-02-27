"use strict";

const http = require("http");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const storage = require("./datastoragelayer");

const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/getall", (req, res) => {
  storage
    .getAll()
    .then((result) => res.json({ data: result }))
    .catch((err) => console.log(err));
});

app.get("/countryinfo/:countryName", async (req, res) => {
  try {
    const { countryName } = req.params;
    const result = await storage.getCountryInfo(countryName);
    res.json({ data: result });
  } catch (err) {
    console.log(err);
  }
});

app.post("/insertviews", async (req, res) => {
  try {
    const { countryCode, views } = req.body;
    const result = await storage.insertViews(countryCode, views);
    res.json({ data: result });
  } catch (err) {
    console.log(err);
  }
});

app.get("/insertviews", (req, res) => {
  storage
    .getViewInfo()
    .then((result) => res.json({ data: result }))
    .catch((err) => console.log(err));
});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Server ${process.env.HOST} is listening to port:${process.env.PORT}`
  );
});
