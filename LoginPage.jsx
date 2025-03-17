import React, { useState } from "react";
import "./LoginForm.css";


async function loginUser(credentials) {
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const LoginForm = ({ onLogin }) => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    console.log(response);
    if ('accessToken' in response) {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/sidebar";
      }
    else {
      console.log(response.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <div className="wrapper-one">
          <div className = "Logo">
          <h1>MS IT</h1>
          <p className="para">Linnworks Automation</p>
          </div>
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}

        <div className="input-box">
          <span className="Pass-Too">Email</span>
          <input
            className="render"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <span className="Pass">Password</span>
          <input
            className="New"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>

        <div className="register-link">
          <a href="#" className="vision">Forgot Password?</a>
          <button className="register-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
