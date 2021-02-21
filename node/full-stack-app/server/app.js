const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./DatabaseService");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post("/insert", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await dbService.insertNewName(name);

    res.json({ data: result });
  } catch (err) {
    console.log(err);
  }
});

// read
app.get("/getall", (req, res) => {
  const result = dbService.getAll();
  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

// update
app.patch("/update", (req, res) => {
  // console.log(req.body);
  const { id, name } = req.body;
  const result = dbService.updateNameById(id, name);

  result
    .then((data) => res.json({ success: data }))
    .catch((err) => console.log(err));
});

// delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const result = dbService.deleteRowById(id);
  result
    .then((data) => res.json({ success: data }))
    .catch((err) => console.log(err));
});

app.get("/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const result = await dbService.searchByName(name);
    res.json({data:result})
  } catch (err) {
    console.log(err)
  }
});

app.listen(process.env.PORT, () =>
  console.log("App is listening on port", process.env.PORT)
);
