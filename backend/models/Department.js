const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hod: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Department", departmentSchema);