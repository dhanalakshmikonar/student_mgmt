const express = require("express");
const router = express.Router();
const Mark = require("../models/Mark");

router.post("/", async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();

    res.json({ message: "Mark Saved" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:studentId", async (req, res) => {
  try {
    const marks = await Mark.find({
      studentId: req.params.studentId
    });

    res.json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;