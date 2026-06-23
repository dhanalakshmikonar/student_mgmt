import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#0f172a",
          marginBottom: "10px",
        }}
      >
        Welcome {student?.["Student Name"]}
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
          fontSize: "18px",
        }}
      >
        Student Dashboard
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        <div
  style={cardStyle}
  onClick={() => navigate("/student-profile")}
>
  My Profile
</div>

<div
  style={cardStyle}
  onClick={() => navigate("/student-subjects")}
>
  My Subjects
</div>

<div
  style={cardStyle}
  onClick={() => navigate("/student-attendance")}
>
  Attendance
</div>

<div
  style={cardStyle}
  onClick={() => navigate("/student-marks")}
>
  My Marks
</div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Student Information</h3>

        <p>
          <strong>Name:</strong> {student?.["Student Name"]}
        </p>

        <p>
          <strong>Department:</strong> {student?.Department}
        </p>

        <p>
          <strong>Grade:</strong> {student?.Grade}
        </p>

        <p>
          <strong>Status:</strong> {student?.Status}
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "220px",
  height: "120px",
  background: "#1e293b",
  color: "white",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
};

export default StudentDashboard;