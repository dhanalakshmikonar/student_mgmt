import { useEffect, useState } from "react";
import axios from "axios";

function Students() {
const [students, setStudents] = useState([]);
const [search, setSearch] = useState("");
const [showForm, setShowForm] = useState(false);
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [studentToDelete, setStudentToDelete] = useState(null);
const [newStudent, setNewStudent] = useState({
  "Student Name": "",
  "Department": "",
   Age: "",
  "Attendance %": ""
});
useEffect(() => {
fetchStudents();
}, []);

const fetchStudents = () => {
axios
.get("http://localhost:5000/api/students")
.then((res) => setStudents(res.data))
.catch((err) => console.log(err));
};

const deleteStudent = async (id) => {
if (!window.confirm("Delete this student?")) return;

try {
  await axios.delete(
    `http://localhost:5000/api/students/${id}`
  );

  setStudents(
    students.filter((s) => s._id !== id)
  );
} catch (err) {
  console.log(err);
}

};

const filteredStudents = students.filter((s) =>
(s["Student Name"] || "")
.toLowerCase()
.includes(search.toLowerCase())
);
const addStudent = async () => {
 console.log("Sending data:", newStudent);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/students",
      newStudent
    );
 fetchStudents();
    setStudents([...students, res.data]);

    

    setShowForm(false);
  } catch (err) {
    console.log(err);
  }
};
return ( <div>
<h2 style={{ color: "white" }}>
Students List </h2>
  <input
    type="text"
    placeholder="Search Student..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    style={{
      padding: "10px",
      width: "300px",
      marginBottom: "20px",
    }}
  />
<button
  onClick={() => setShowForm(!showForm)}
  style={{
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "15px",
    cursor: "pointer"
  }}
>
  Add Student
</button>
{showForm && (
  <div
    style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}
  >
    <input
      placeholder="Student Name"
      onChange={(e) =>
        setNewStudent({
          ...newStudent,
          "Student Name": e.target.value
        })
      }
    />

    <select
onChange={(e) =>
setNewStudent({
...newStudent,
Department: e.target.value
})
}

>

  <option value="">Select Department</option>
  <option value="CSE">CSE</option>
  <option value="IT">IT</option>
  <option value="AI">AI</option>
  <option value="BCA">BCA</option>
  <option value="BSC CS">BSC CS</option>
  <option value="BCOM">BCOM</option>
</select>


    <input
    type="number"
      placeholder="Age"
      onChange={(e) =>
        setNewStudent({
          ...newStudent,
          Age: e.target.value
        })
      }
    />

    <input
  type="number"
  placeholder="Attendance %"
  value={newStudent["Attendance %"] || ""}
  onChange={(e) => {
    const value = Number(e.target.value);

    if (value <= 100) {
      setNewStudent({
        ...newStudent,
        "Attendance %": e.target.value,
      });
    }
  }}
/>

    <button onClick={addStudent}>
      Save
    </button>
  </div>
)}
  <table
    border="1"
    cellPadding="10"
    style={{
      width: "100%",
      background: "#1e293b",
      color: "white",
    }}
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Age</th>
        <th>Attendance</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {filteredStudents.map((s) => (
        <tr key={s._id}>
          <td>{s["Student Name"]}</td>
          <td>{s.Department}</td>
          <td>{s.Age}</td>
          <td>{s["Attendance %"]}</td>

          <td>
            <button  style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 15px",
          marginRight: "10px",
          borderRadius: "5px",
        }}
  onClick={() => {
    setStudentToDelete(s._id);
    setShowDeleteModal(true);
  }}
>
  Delete
</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  {showDeleteModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        textAlign: "center",
        minWidth: "300px",
      }}
    >
      <h3>Delete Student</h3>

      <p>
        Are you sure you want to delete this student?
      </p>

      <button
        onClick={() => {
          deleteStudent(studentToDelete);
          setShowDeleteModal(false);
        }}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "10px 15px",
          marginRight: "10px",
          borderRadius: "5px",
        }}
      >
        Delete
      </button>

      <button
        onClick={() => setShowDeleteModal(false)}
        style={{
          background: "gray",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)}
</div>

);
}

export default Students;
