import React from 'react'
import './Login.css'; // we'll style using this CSS file

function Login() {

  return (
    <div class="loginContainer">
       <div className="loginForm">
        <div className="logo">
          <img src="/images/mainLogo.svg" alt="main logo" />
        </div>
        <h2>Welcome back</h2>
        <p>Login to continue</p>

        <form action="login">

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="form-footer">
            <input type="checkbox" id="showPassword" />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <button type="submit">Login</button>

          <p className="loginText">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login