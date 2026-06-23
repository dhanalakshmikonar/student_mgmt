const express = require("express");
const router = express.Router();
const Staff = require("../models/staff");

// GET ALL STAFF
router.get("/", async (req, res) => {
  const data = await Staff.find();
  res.json(data);
});

// ADD STAFF
router.post("/", async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updated = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// DELETE STAFF
router.delete("/:id", async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: "Staff deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;