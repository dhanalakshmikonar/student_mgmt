const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  department: String,
  semester: Number,
  timetable: Object
});

module.exports = mongoose.model("Timetable", timetableSchema);