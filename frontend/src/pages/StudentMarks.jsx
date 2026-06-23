import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentMarks() {
  const [marks, setMarks] = useState([]);
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/marks")
      .then((res) => {
        const myMarks = res.data.filter(
          (item) => item.studentId === student._id
        );

        setMarks(myMarks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/student-dashboard")}>
        ← Back
      </button>

      <h2>My Marks</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Internal</th>
            <th>External</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {marks.map((mark) => (
            <tr key={mark._id}>
              <td>{mark.subject}</td>
              <td>{mark.internalMarks}</td>
              <td>{mark.externalMarks}</td>
              <td>{mark.total}</td>
              <td>{mark.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentMarks;