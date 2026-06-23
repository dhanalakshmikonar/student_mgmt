import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleLogin = async () => {
  // Admin Login
  if (username === "admin" && password === "1234") {
    localStorage.setItem(
      "user",
      JSON.stringify({ loggedIn: true })
    );

    navigate("/dashboard");
    return;
  }

  // Student Login
  try {
    const res = await axios.post(
      "http://localhost:5000/api/students/login",
      {
        username,
        password,
      }
    );

    localStorage.setItem(
      "student",
      JSON.stringify(res.data)
    );

    navigate("/student-dashboard");
  } catch (err) {
    setError("Invalid Login");
  }
};
 return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    }}
  >
    <div
      style={{
        width: "400px",
        background: "#ffffff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e293b",
          marginBottom: "10px",
        }}
      >
        Student Management System
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Staff Login
      </p><div style={{ marginBottom: "15px" }}>
  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
    }}
  >
    <option value="admin">Admin</option>
    <option value="student">Student</option>
  </select>
</div>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #cbd5e1",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #cbd5e1",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  </div>
);
}

export default Login;