import React from 'react';
import '../signin.css';
import userIcon from '../assets/user.png';
import lockIcon from '../assets/lock.png'
import googleIcon from '../assets/google.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'

const SignIn = () => {

  return (
    <div className="container">
      <h1 className="signInText">Sign in</h1>
      <div className="part2">
        <h2 className="welcomeText">Welcome back</h2>
        <p className="signInSubText">Hi there, Sign in to Continue</p>
        <label className="label">Username or Email</label>
        <div className="formField">
          <div className="iconContainer">
            <img src={userIcon} alt="User" className="icon" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Username"
          />
        </div>
        <label className="label">Password</label>
        <div className="formField">
          <div className="iconContainer">
            <img src={lockIcon} alt="Lock" className="icon" />
          </div>
          <input
            type="password"
            className="input"
            placeholder="Password"
          />
        </div>
        <p className="forgotPassword">Forgot Password?</p>
        <button className="signInButton">Sign In</button>
        <div className="horizontalStroke">
          <div className="line" />
          <p className="orSignInWith">or sign in with</p>
          <div className="line" />
        </div>
        <div className="socialIcons">
          <img src={googleIcon} alt="Google" className="socialIcon" />
          <img src={facebookIcon} alt="Facebook" className="socialIcon" />
          <img src={twitterIcon} alt="Twitter" className="socialIcon" />
        </div>
        <p className="signUpText">
          Don't have an account?{' '}
          <span
            className="signUpLink"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;