import { useEffect, useState } from "react";

import axios from "axios";

function Subjects() {
  const [subjects, setSubjects] = useState([]);
   

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/subjects")
      .then((res) => setSubjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
       
      <h2>Subjects</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Code</th>
            <th>Subject Name</th>
            <th>Type</th>
            <th>Credits</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((sub) => (
            <tr key={sub._id}>
              <td>{sub.semester}</td>
              <td>{sub.subjectCode}</td>
              <td>{sub.subjectName}</td>
              <td>{sub.type}</td>
              <td>{sub.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subjects;