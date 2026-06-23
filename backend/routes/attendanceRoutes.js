const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

router.get("/", async (req, res) => {
  const data = await Attendance.find();

  console.log("Attendance Data:", data);

  res.json(data);
});

router.post("/", async (req, res) => {
  console.log("Received Attendance:", req.body);

  const attendance = new Attendance(req.body);
  await attendance.save();

  console.log("Saved Attendance:", attendance);

  res.json(attendance);
});

module.exports = router;