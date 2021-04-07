const http = require("http");
const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const dbConfig = require("./config/db.config");
env.config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const app = express();

const server = http.createServer(app);

// let corsOptions = {
//   origin: "http://localhost:3001",
// };

// app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.DB_HOST}:${dbConfig.DB_PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.log("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => res.send("User Authentication App"));

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

server.listen(PORT, HOST, () => {
  console.log(`Server ${HOST} is up and running on port:${PORT}`);
});

const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({ name: "user" }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({ name: "moderator" }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({ name: "admin" }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
};
