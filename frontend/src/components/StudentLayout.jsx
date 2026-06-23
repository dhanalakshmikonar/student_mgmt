import { Outlet } from "react-router-dom";
import StudentSidebar from "../pages/StudentSidebar";

function StudentLayout() {
  return (
    <div style={{ display: "flex" }}>
      <StudentSidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentLayout;