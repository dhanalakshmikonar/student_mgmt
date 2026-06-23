import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Reports from "./pages/Reports";
import Marks from "./pages/Marks";
import Staff from "./pages/Staff";
import Department from "./pages/Department";
import Subjects from "./pages/Subject";
import DepartmentSubjects from "./pages/DepartmentSubjects";
import Attendance from "./pages/Attendance";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import StudentSubjects from "./pages/StudentSubjects";
import StudentAttendance from "./pages/StudentAttendance";
import StudentMarks from "./pages/StudentMarks";
import StudentLayout from "./components/StudentLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
          <Route element={<StudentLayout />}>
          <Route path="/student-dashboard" element={<StudentDashboard />}/>
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/student-subjects" element={<StudentSubjects />}/>
          <Route path="/student-attendance" element={<StudentAttendance />} />
           <Route path="/student-marks" element={<StudentMarks />}/>
        </Route>
          <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/department/:departmentName" element={<DepartmentSubjects />}/>
          <Route path="/attendance" element={<Attendance />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;