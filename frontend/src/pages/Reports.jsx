import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
const [students, setStudents] = useState([]);

useEffect(() => {
axios
.get("http://localhost:5000/api/students")
.then((res) => {
console.log("REPORT DATA:", res.data);
setStudents(res.data);
})
.catch((err) => console.log(err));
}, []);

const topStudents = [...students]
.sort(
(a, b) =>
Number(b["Attendance %"]) -
Number(a["Attendance %"])
)
.slice(0, 5);
console.log("Students:", students);
return (
  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "10px",
      color: "white",
    }}
  >
    <h2>Top 5 Students</h2>

    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "15px",
      }}
    >
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Department</th>
          <th>Attendance %</th>
        </tr>
      </thead>

      <tbody>
        {topStudents.map((s, index) => (
          <tr key={s._id}>
            <td>{index + 1}</td>
            <td>{s["Student Name"]}</td>
            <td>{s.Department}</td>
            <td>{s["Attendance %"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Reports;
