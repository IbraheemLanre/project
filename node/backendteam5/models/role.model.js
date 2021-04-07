const mongoose = require("mongoose");

let RoleSchema = mongoose.Schema({
  name: String,
});

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
