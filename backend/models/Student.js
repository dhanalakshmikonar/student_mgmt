const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
 
  "Student Name": String,
  Age: Number,
  "Attendance %": Number,
  Department: String,
  Grade:String,
  username:String,
  password:String
});

module.exports = mongoose.model("Students", studentSchema);