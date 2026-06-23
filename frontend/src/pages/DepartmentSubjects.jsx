import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DepartmentSubjects() {
  const { departmentName } = useParams();
const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/subjects")
      .then((res) => {
  console.log(res.data);

  const filtered = res.data.filter(
    (sub) =>
      sub.departmentId &&
      sub.departmentId.name === departmentName
  );

  console.log(filtered);

  setSubjects(filtered);
})
      .catch((err) => console.log(err));
  }, [departmentName]);

  return (
    <div style={{ padding: "0px", color: "white" }}>
     
      <h1 style={{
        marginTop:"0",
        marginBottom:"15px",
      }}>{departmentName} Subjects</h1>
<p>Total Subjects: {subjects.length}</p>
      {[1, 2, 3, 4, 5, 6].map((sem) => (
        <div key={sem} style={{ marginBottom: "25px" }}>
          <h2>Semester {sem}</h2>

          {subjects
            .filter((sub) => sub.semester === sem)
            .map((sub) => (
              <div
                key={sub._id}
                style={{
  background: "#1e293b",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  minHeight: "80px",
}}
              >
                <strong>{sub.subjectCode}</strong> - {sub.subjectName}
                <br />
                Type: {sub.type}
                <br />
                Credits: {sub.credits}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default DepartmentSubjects;