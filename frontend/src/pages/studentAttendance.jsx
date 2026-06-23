import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentAttendance() {
  const [attendance, setAttendance] = useState([]);
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

 useEffect(() => {
 

  axios
    .get("http://localhost:5000/api/attendance")
    .then((res) => {
      const myAttendance = res.data.filter(
        (item) => item.studentId === student._id
      );

      setAttendance(myAttendance);
    })
    .catch((err) => console.log(err));
}, []);
  const presentCount = attendance.filter(
  (item) => item.status === "Present"
).length;

const attendancePercentage =
  attendance.length > 0
    ? ((presentCount / attendance.length) * 100).toFixed(2)
    : 0;
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/student-dashboard")}>
        ← Back
      </button>

      <h2>My Attendance</h2>
      <h3>
  Attendance Percentage: {attendancePercentage}%
</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{item.subject}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentAttendance;