const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

const user = mongoose.model("User", UserSchema);

module.exports = user;
