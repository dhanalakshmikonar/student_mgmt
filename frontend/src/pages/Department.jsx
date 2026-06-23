import { useState, useEffect } from "react";
import axios from "axios";

function Department() {
  const  [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    hod: "",
  });

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/departments"
      );
      setDepartments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addDepartment = async () => {
    if (!form.name.trim()) {
      alert("Department name is required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/departments",
        form
      );

      setForm({
        name: "",
        hod: "",
      });

      fetchDepartment();
    } catch (err) {
      alert("Department already exists");
    }
  };

  const deleteDepartment = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/departments/${id}`
      );

      fetchDepartment();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="department-container">
  <div className="department-card">
    <h2>Departments</h2>

    <div className="department-form">
      <input
        type="text"
        placeholder="Department Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="HOD Name"
        value={form.hod}
        onChange={(e) =>
          setForm({ ...form, hod: e.target.value })
        }
      />

      <button onClick={addDepartment}>
        Add Department
      </button>
    </div>

    <table className="department-table">
      <thead>
        <tr>
          <th>Department</th>
          <th>HOD</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {departments.map((dept) => (
          <tr key={dept._id}>
            <td>{dept.name}</td>
            <td>{dept.hod}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => deleteDepartment(dept._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )}
export default Department;