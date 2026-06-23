console.log("Timetable route loaded");

const express = require("express");
const router = express.Router();
const Timetable = require("../models/timetable");

router.get("/:department", async (req, res) => {
  console.log("Department requested:", req.params.department);

  try {
    const timetable = await Timetable.findOne({
      department: req.params.department,
    });

    if (!timetable) {
      return res.status(404).json({ message: "No timetable found" });
    }

    res.json(timetable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;