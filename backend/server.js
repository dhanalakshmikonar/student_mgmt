console.log("Staff routes loaded");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const subjectRoutes = require("./routes/subjectRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const Student = require("./models/Student");
const markRoutes = require("./routes/markRoutes");
const Timetable = require("./models/timetable");
const Attendance = require("./models/Attendance");
const timetableRoute = require("./routes/timetableRoute");
app.use("/api/timetable", timetableRoute);
app.get("/timetable/:dept", async (req, res) => {
  try {
    const data = await Timetable.findOne({
      department: req.params.dept
    });

    if (!data) {
      return res.status(404).json({ message: "Timetable not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post("/attendance", async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();

    res.json({ message: "Attendance saved" });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use("/api/departments", departmentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/marks", markRoutes);
app.get("/add", async (req, res) => {
  const Student = require("./models/Student");

  const newStudent = await Student.create({
    name: "Arun",
    department: "CSE",
    Age: 20
  });

  res.send(newStudent);
});
  app.get("/timetable/:dept", async (req, res) => {
  const data = await Timetable.findOne({
    department: req.params.dept
  });

  res.json(data);
});
app.use((req, res, next) => {
  console.log("Request came:", req.url);
  next();
});
// routes
const staffRoutes = require("./routes/staffRoutes");
const studentRoutes = require("./routes/studentRoutes"); // ✅ ADDED

app.use("/api/staff", staffRoutes);
app.use("/api/students", studentRoutes); // ✅ ADDED

// mongo connection
mongoose.connect("mongodb://127.0.0.1:27017/student_management")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});