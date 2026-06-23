const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Major", "Practical", "Language","Elective"],
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Subject", subjectSchema, "Subject");