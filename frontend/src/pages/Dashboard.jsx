


import { useState, useEffect } from "react";
import axios from "axios";

import Students from "./Students";
import Courses from "./Courses";
import Reports from "./Reports";

function Dashboard() {
  const [students, setStudents] = useState([]);
  // 📦 Fetch students
  useEffect(() => {
  axios
    .get("http://localhost:5000/api/students")
    .then((res) => {
      console.log("API DATA:", res.data);
      setStudents(res.data); // TEMP (no filter)
    })
    .catch((err) => console.log(err));
}, []);

  const totalStudents = students.length;

  const totalDepartments = new Set(
    students.map((s) => s.Department)
  ).size;

  const inactiveStudents = students.filter(
    (s) => s.Status === "Inactive"
  ).length;

  const topStudent =
    students.length > 0
      ? [...students].sort(
          (a, b) =>
            Number(b["Attendance %"]) -
            Number(a["Attendance %"])
        )[0]
      : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    
    <div style={{ padding: "20px",width:"100%" }}>
      <h1 style={{ color: "black" }}>
        Student Management System
      </h1>
 <div style={{ display: "flex", width: "100%" }}>

      <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    justifyContent: "center",
alignItems: "flex-start",
width: "100%"
  }}
>
      
        <div style={card}>
          <h3>Total Students</h3>
          <h1>{totalStudents}</h1>
        </div>

        <div style={card}>
          <h3>Departments</h3>
          <h1>{totalDepartments}</h1>
        </div>

        <div style={card}>
          <h3>Inactive Students</h3>
          <h1>{inactiveStudents}</h1>
        </div>

    </div>
      </div>
    </div>
  );
}

const card = {
  background: "#1e293b",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  width: "250px",
  height:"200px",
  alignItems:"center",
  justifyContent:"center"
};

export default Dashboard;
