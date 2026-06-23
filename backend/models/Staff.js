const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  department: String,
},{ collection: "staff" });

module.exports = mongoose.model("Staff", StaffSchema);