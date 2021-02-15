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
  // console.log(req.body)
  const { name } = req.body;
  const data = await dbService.insertNewName(name);

res.json({data:data})
});

// read
app.get("/getall", async (req, res) => {
  const data = await dbService.getAll();
  //   result
  //     .then((data) => res.json({ data: data }))
  //     .catch((err) => console.log(err));
  res.json({
    data: data,
  });
});

// update

// delete

app.listen(process.env.PORT, () =>
  console.log("App is listening on port", process.env.PORT)
);
