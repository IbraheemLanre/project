"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const localDb = process.env.LOCAL_DB;
const Post = require("../server/models/Post");

const mongoose = require("mongoose");
mongoose.connect(localDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// If connected
db.once("open", function () {
  console.log("Connected to DB!");
});

// If connection throws an error
db.on("error", function (error) {
  console.log(`Mongoose connection error: ${error}`);
});

// If disconnected
db.on("disconnected", function () {
  console.log(`Mongoose default connection disconnected`);
});

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Get back all post
app.get("/", async (req, res) => {
  try {
    const biodata = await Post.find();
    res.json(biodata);
  } catch (err) {
    console.log(err);
  }
});

// create a new post
app.post("/newpost", async (req, res) => {
  const newBiodata = new Post({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    await newBiodata.validate();
    const savedBiodata = await newBiodata.save();
    res.json(savedBiodata);
    console.log("Received Post");
  } catch (err) {
    console.log(err);
  }
});

// get back a specific post
app.get("/getone/:id", async (req, res) => {
  try {
    const biodata = await Post.findById(req.params.id);
    res.json(biodata);
  } catch (err) {
    console.log(err);
  }
});

//Delete a post

app.delete("/remove/:id", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    console.log(err);
  }
});

// Replace/Update an existing post
app.put("/update/:name", async (req, res) => {
  try {
    const updatedBiodata = await Post.updateOne(
      { name: req.params.name },
      { $set: { name: req.body.name, age: req.body.age } }
    );
    res.json(updatedBiodata);
  } catch (err) {
    console.log(err);
  }
});

server.listen(port, () =>
  console.log(`Server is up and running at port ${port}`)
);
