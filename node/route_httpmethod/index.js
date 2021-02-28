const express = require("express");
const app = express();
const PORT = 3000;
const accounts = require("./account.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Eledumare! Oba Ajiki");
});

app.get("/accounts", (req, res) => {
  res.json(accounts);
});

app.get("/accounts/:id", (req, res) => {});

app.listen(PORT, () =>
  console.log(`Express server is currently running on port ${PORT}`)
);
