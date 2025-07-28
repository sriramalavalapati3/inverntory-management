import React from 'react';
import './SignUp.css'; // we'll style using this CSS file

function SignUp() {
  return (
    <div className="signUpContainer">
      <div className="signUpForm">
        <div className="logo">
          <img src="/images/mainLogo.svg" alt="main logo" />
        </div>
        <h2>Welcome</h2>
        <p>Sign up to continue</p>

        <form action="signup">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter your username" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />

          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Enter your phone number" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="form-footer">
            <input type="checkbox" id="showPassword" />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <button type="submit">Sign Up</button>

          <p className="loginText">
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
