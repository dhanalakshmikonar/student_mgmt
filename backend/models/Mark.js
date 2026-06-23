const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  subject: String,
  internalMarks: Number,
  externalMarks: Number,
  total: Number,
  grade: String,
});

module.exports = mongoose.model("Mark", markSchema);