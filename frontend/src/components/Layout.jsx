import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "90vh",}}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" ,}}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;