import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
   
  };
return (
<div
style={{
width: "220px",
minHeight: "100vh",
background: "#0f172a",
color: "white",
padding: "20px",
}}
> <h2>SMS</h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}
  >
    <button style={{color: "white",
textDecoration: "none",
background: "#1e293b",
padding: "10px",
borderRadius: "5px"
    }}
  onClick={() => {
    console.log("clicked dashboard");
    navigate("/dashboard");
  }}
>
  Dashboard
</button>

    <Link
      to="/students"
      style={linkStyle}
    >
      Students
    </Link>

    <Link
      to="/courses"
      style={linkStyle}
    >
      Courses
    </Link>
  <Link
  to="/attendance"
  style={linkStyle}
>
  Attendance
</Link>
    <Link
      to="/reports"
      style={linkStyle}
    >
      Reports
    </Link>
<Link to="/marks" style={linkStyle}>
  Marks
</Link>
  <Link to="/departments"
  style={linkStyle}
    >
  Departments</Link>
  
    <button
  onClick={() => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }}
  style={{
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Logout
</button>
<button
  onClick={() => navigate("/staff")}
  style={{
    background: "#23a525",
    color: "white",
    fontWeight: "bold",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Staff
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
borderRadius: "5px"
};

export default Sidebar;
