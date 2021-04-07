const mongoose = require("mongoose");

let RoleSchema = mongoose.Schema({
  name: String,
});

export const Role = mongoose.model("Role", RoleSchema);

