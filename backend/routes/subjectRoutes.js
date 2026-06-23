const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject");

router.get("/", async (req, res) => {
  try {
    const subject = await Subject.find().populate("departmentId");
    res.json(subject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
  const { registerNumber, password } = req.body;

  const student = await Student.findOne({
    "Register Number": registerNumber,
    password
  });

  if (!student) {
    return res.status(401).json({
      message: "Invalid Credentials"
    });
  }

  res.json(student);
});
module.exports = router;