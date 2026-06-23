import { useState, useEffect } from "react";
import axios from "axios";
import "./Staff.css";
function Staff() {
  const [staffs, setStaffs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    department: "",
  });
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  useEffect(() => {
    fetchStaffs();
  }, []);

  const fetchStaffs = () => {
  axios.get("http://localhost:5000/api/staff")
    .then((res) => {
      setStaffs(res.data);
      console.log(res.data);
    });
};

  const addStaff = () => {
    axios
      .post("http://localhost:5000/api/staff", form)
      .then(() => {
        fetchStaffs();
        setForm({
          name: "",
          username: "",
          password: "",
          role: "",
        });
      });
  };
const deleteStaff = (id) => {
  axios
    .delete(`http://localhost:5000/api/staff/${id}`)
    .then(() => {
      fetchStaffs();
    })
      .catch((err) => console.log(err));
};
  return (
    <div className="staff-form">
      <h2>Staff Management</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
      />

      <input
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <input
        placeholder="Department"
        value={form.role}
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
      />

      <button className="add-btn" onClick={addStaff}>
        Add Staff
      </button>

      <hr />

      {staffs.map((s) => (
  <div key={s._id}>
    {s.name} | {s.username} | {s.department}

    {/* DELETE BUTTON */}
    <button className="delete-btn" onClick={() => deleteStaff(s._id)}>
      Delete
    </button>
  </div>
))}
    </div>
  );
}

export default Staff;