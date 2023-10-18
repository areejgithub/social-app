import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login"); // Use navigate to redirect to the "/login" route
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onClick={handleClick}>
            <input
              placeholder="Username"
              type="text"
              ref={username}
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              required
              minLength="6"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              ref={passwordAgain}
              required
              className="loginInput"
            />

            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
