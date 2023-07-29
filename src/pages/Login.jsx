import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", inputs, {
        withCredentials: true,
      });

      navigate("/");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err.message}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
