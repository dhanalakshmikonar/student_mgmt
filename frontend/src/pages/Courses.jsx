import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  
const [students, setStudents] = useState([]);
const [selectedDept, setSelectedDept] = useState(null);
const navigate = useNavigate();
useEffect(() => {
axios
.get("http://localhost:5000/api/students")
.then((res) => setStudents(res.data));
}, []);

const departments = [
  "CSE",
  "IT",
  "AI",
  "Bcom",
  "CS"
];

return (

  <div>
    <h2 style={{ color: "white" }}>
      Departments
    </h2>

<div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    flexWrap: "wrap",
  }}
>
  
  <div 
 onClick={() => navigate("/department/CSE")}
  style={card}>
    <h3>CSE</h3>
    <p>Computer Science Engineering</p>
  </div>
 <div
  style={card}
  onClick={() => navigate("/department/AI")}
>
  <h3>AI</h3>
  <p>Artificial Intelligence</p>
</div>
  <div 
  onClick={() => navigate("/department/IT")}
  style={card}>
    <h3>IT</h3>
    <p>Information Technology</p>
  </div>

  <div 
 onClick={() => navigate("/department/Bcom")}
  style={card}>
    <h3>Bcom</h3>
    <p>COMMERCE</p>
  </div>
  <div
  onClick={() => navigate("/department/BCA")} style={card}>
    <h3>BCA</h3>
    <p>Computer Application</p>
  </div>
  <div 
  onClick={() => navigate("/department/CS")}
  style={card}>
    <h3>CS</h3>
    <p>ComputerScience</p>
  </div>
</div>

  </div>
)}

const card = {
background: "#1e293b",
color: "white",
padding: "20px",
borderRadius: "12px",
width: "220px",
textAlign: "center",
boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};


export default Courses;
