import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault(); // prevents page reload
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you would usually call an API to log in
  };

  return (

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>
    </div>

  );

  
}export default Login;

