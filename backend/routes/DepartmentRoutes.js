const express = require("express");
const router = express.Router();
const Department = require("../models/Department");

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add department
router.post("/", async (req, res) => {
  try {
    const existing = await Department.findOne({
      name: req.body.name,
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "Department already exists" });
    }

    const department = new Department(req.body);
    await department.save();

    res.status(201).json(department);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete department
router.delete("/:id", async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;