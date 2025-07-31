import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault(); // prevents page reload

    if (email==="admin@example.com" && password==="123456") {
      
      alert("Login successful");

    }else{

      alert("Invalid email or password");
    }
    
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

