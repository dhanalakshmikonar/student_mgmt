import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentSubjects() {
  const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
    
  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/subjects"
    );

    const filtered = res.data.filter(
      (sub) =>
        sub.departmentId?.name === student.Department
    );

    setSubjects(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
       <button
  onClick={() => navigate("/student-dashboard")}
  style={{
    marginBottom: "15px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor:"greenyellow"
  }}
>
  ← Back
</button>

      <h2>{student.Department} Subjects</h2>

      {subjects.map((sub) => (
        <div
          key={sub._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{sub.subjectName}</h3>
          <p>Code: {sub.subjectCode}</p>
          <p>Semester: {sub.semester}</p>
          <p>Credits: {sub.credits}</p>
          <p>Type: {sub.type}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentSubjects;