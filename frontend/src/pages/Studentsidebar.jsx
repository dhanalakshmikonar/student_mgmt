import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Student Portal</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Link to="/student-dashboard" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/student-profile" style={linkStyle}>
          My Profile
        </Link>

        <Link to="/student-subjects" style={linkStyle}>
          My Subjects
        </Link>

        <Link to="/student-attendance" style={linkStyle}>
          My Attendance
        </Link>

        <Link to="/student-marks" style={linkStyle}>
          My Marks
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("student");
            window.location.href = "/";
          }}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  background: "#1e293b",
  padding: "10px",
  borderRadius: "5px",
};

export default StudentSidebar;