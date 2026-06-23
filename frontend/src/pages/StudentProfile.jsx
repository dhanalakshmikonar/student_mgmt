import "./StudentProfile.css";
function StudentProfile() {
  const student = JSON.parse(localStorage.getItem("student"));

  return (
  <div className="profile-container">
    <h2 className="profile-title">My Profile</h2>

    <div className="profile-card">
      <div className="profile-row">
        <span className="profile-label">Name</span>
        <span className="profile-value">{student?.["Student Name"]}</span>
      </div>

      <div className="profile-row">
        <span className="profile-label">Department</span>
        <span className="profile-value">{student?.Department}</span>
      </div>

      

      <div className="profile-row">
        <span className="profile-label">Age</span>
        <span className="profile-value">{student?.Age}</span>
      </div>

      <div className="profile-row">
        <span className="profile-label">Gender</span>
        <span className="profile-value">{student?.Gender}</span>
      </div>

      <div className="profile-row">
        <span className="profile-label">Attendance</span>
        <span className="profile-value">{student?.["Attendance %"]}%</span>
      </div>

      <div className="profile-row">
        <span className="profile-label">Grade</span>
        <span className="profile-value">{student?.Grade}</span>
      </div>

      <div className="profile-row">
        <span className="profile-label">Status</span>
        <span className="profile-value">{student?.Status}</span>
      </div>
    </div>
  </div>
);
}
const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #e5e7eb",
};

export default StudentProfile;