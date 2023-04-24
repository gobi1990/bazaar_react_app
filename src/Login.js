import React from 'react';
import './Login.css'; // import styles

function Login() {
  return (
    <div className="login-container">
      <img src="background-image.jpg" alt="background" className="background-image" />
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
