const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  subject: String,
  date: String,
  status: String,
});

module.exports = mongoose.model("Attendance", attendanceSchema);