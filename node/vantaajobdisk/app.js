"use strict";

const http = require("http");
const path = require("path");
const cors = require("cors");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { writeToStorage, readFromStorage } = require("./jsonreaderwriterx");
dotenv.config();
const host = process.env.HOST;
const port = process.env.PORT;
const dataPath = "vantaadata.json";

const server = http.createServer(app);
app.use(cors());

function checkUpdate() {
  return true;
}

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "vantaajob.html"))
);

app.get("/json", async (req, res) => {
  if (checkUpdate()) {
    try {
      const result = await fetch("http://gis.vantaa.fi/rest/tyopaikat/v1");
      const data = await result.json();
      await writeToStorage(dataPath, data);
      res.json(data);
      console.log("Updated");
    } catch (err) {
      console.log("update failed", err.message);
      res.sendStatus = 404;
    }
  }
  const storage = await readFromStorage(dataPath);
  res.json(storage);
});

server.listen(port, host, () => console.log(`Server is up and running`));
