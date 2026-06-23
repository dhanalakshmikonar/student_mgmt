import { useEffect, useState } from "react";
import axios from "axios";

function Marks() {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
const [marks, setMarks] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => setStudents(res.data));
  }, []);
const saveMarks = async () => {
  try {
    const filteredStudents = students.filter(
      (s) =>
        department === "" ||
        s.Department === department
    );

    for (const student of filteredStudents) {
      await axios.post(
        "http://localhost:5000/api/marks",
        {
          studentId: student._id,
          studentName: student["Student Name"],
          department,
          subject,
          mark: marks[student._id] || 0
        }
      );
    }

    alert("Marks Saved Successfully");
  } catch (err) {
    console.log(err);
    alert("Error Saving Marks");
  }
};
  return (
    <div>
      <h2>Enter Marks</h2>

      <select
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      >
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="AI">AI</option>
        <option value="IT">IT</option>
        <option value="BCA">BCA</option>
        <option value="BCOM">BCOM</option>
      </select>

      <input
        placeholder="Enter Subject"
        value={subject}
        onChange={(e) =>
          setSubject(e.target.value)
        }
      />
      <table>
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Mark</th>
    </tr>
  </thead>

  <tbody>
    {students
      .filter(
        (s) =>
          department === "" ||
          s.Department === department
      )
      .map((student) => (
        <tr key={student._id}>
          <td>{student["Student Name"]}</td>

          <td>
            <input
              type="number"
              min="0"
              max="100"
              value={marks[student._id] || ""}
              onChange={(e) =>
                setMarks({
                  ...marks,
                  [student._id]: e.target.value,
                })
              }
            />
          </td>
        </tr>
      ))}
  </tbody>
</table>
<button onClick={saveMarks}>
  Save Marks
</button>
    </div>
  );
}

export default Marks;