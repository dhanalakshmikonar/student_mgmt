import "./Attendance.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [timetable, setTimetable] = useState(null);
  const [selectedCycle, setSelectedCycle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const saveAttendance = async () => {
    try {
      const filteredStudents = students.filter(
        (s) =>
          selectedDepartment === "" ||
          s.Department === selectedDepartment
      );

      for (const student of filteredStudents) {
        await axios.post(
          "http://localhost:5000/api/attendance",
          {
            studentId: student._id,
            studentName: student["Student Name"],
            subject: selectedSubject,
            
               // 🔥 FIXED (was department)
            period: selectedCycle,      // 🔥 ADDED
            date: new Date().toISOString().split("T")[0],
            status: student.present
              ? "Present"
              : "Absent",
          }
        );
      }
      

      alert("Attendance Saved Successfully!");
    } catch (err) {
      console.log(err);
      alert("Error Saving Attendance");
    }
  };

  useEffect(() => {
  if (!selectedDepartment) return;

  axios
    .get(`http://localhost:5000/timetable/${selectedDepartment}`)
    .then((res) => {
      setTimetable(res.data.timetable);
    })
    .catch((err) => {
      console.log(err);
    });
}, [selectedDepartment]);
useEffect(() => {
  axios
    .get("http://localhost:5000/api/students")
    .then((res) => {
      const data = res.data.map((s) => ({
        ...s,
        present: true,
      }));

      setStudents(data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
 useEffect(() => {
  console.log("Fetching timetable...");

  axios
    .get("http://localhost:5000/timetable/CSE")
    .then((res) => {
      console.log("Timetable Response:", res.data);
      setTimetable(res.data.timetable);
    })
    .catch((err) => {
      console.log("Timetable Error:", err);
    });
}, []);
console.log("Timetable =", timetable);
console.log("Selected Cycle =", selectedCycle);
 return (
  <div className="attendance-container">

    <h2 className="attendance-title">
      Take Attendance
    </h2>

    <select
      className="department-select"
      value={selectedDepartment}
      onChange={(e) => {
  setSelectedDepartment(e.target.value);
  setSelectedCycle("");
  setSelectedSubject("");
}}
    >
      <option value="">Select Department</option>
      <option value="CSE">CSE</option>
      <option value="AI">AI</option>
      <option value="IT">IT</option>
      <option value="BCA">BCA</option>
      <option value="BCOM">BCOM</option>
    </select>

    <div className="period-container">
      <h3>Periods</h3>

      {timetable && Object.keys(timetable).length > 0 ? (
        Object.keys(timetable).map((cycle) => (
          <button
            key={cycle}
            onClick={() => setSelectedCycle(cycle)}
          >
            {cycle}
          </button>
        ))
      ) : (
        <p>No timetable found</p>
      )}
    </div>

    <div className="subject-container">
      <h3>Subjects</h3>

      {selectedCycle &&
      timetable?.[selectedCycle] ? (
        Object.entries(
          timetable[selectedCycle]
        ).map(([p, sub]) => (
          <button
            key={p}
            onClick={() =>
              setSelectedSubject(sub)
            }
          >
            {p} - {sub}
          </button>
        ))
      ) : (
        <p>Select a period first</p>
      )}

      <h4>
        Selected Subject:
        {" "}
        {selectedSubject || "None"}
      </h4>
    </div>

    <table className="student-table">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Present</th>
        </tr>
      </thead>

      <tbody>
        {students
          .filter(
            (s) =>
              selectedDepartment === "" ||
              s.Department === selectedDepartment
          )
          .map((s) => (
            <tr key={s._id}>
              <td>{s["Student Name"]}</td>

              <td>
                <input
                  type="checkbox"
                  checked={s.present}
                  onChange={() => {
                    setStudents(
                      students.map((st) =>
                        st._id === s._id
                          ? {
                              ...st,
                              present: !st.present,
                            }
                          : st
                      )
                    );
                  }}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>

    <button
      className="save-btn"
      onClick={saveAttendance}
    >
      Save Attendance
    </button>

  </div>
);
}

export default Attendance;