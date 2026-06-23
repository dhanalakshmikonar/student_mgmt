const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
  const data = await Student.find();
  console.log("DATA FROM DB:", data);
  res.json(data);
});
// Add Student
// Add Student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);

    await student.save();

    res.status(201).json({
      message: "Student Added Successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const student = await Student.findOne({
      username,
      password,
    });

    if (!student) {
      return res.status(401).json({
        message: "Invalid Login",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Delete student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;