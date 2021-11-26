import React, { useState } from "react";
import Registerstyle from "../style/components/Registerstyle";
import Container from "./Container";
import Footer from "./Footer";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleRegister(evt) {
    evt.preventDefault();
    //validating the form data
    if (username !== "" && email !== "" && role !== "" && password !== "") {
      const postData = async () => {
        const data = await axios.post("/thot/register", {
          username,
          email,
          role,
          password,
        });
        await (<Navigate to="/" />);
      };
      postData();
    }
  }
  function validateUsername(el) {
    const small = el.parentElement.querySelector("small");
    if (el.value.length < 3 && el.value !== "") {
      el.classList.add("error");
      small.classList.add("error");
      small.textContent = "Please add a Username of aleast 3";
    } else {
      small.classList.remove("error");
      el.classList.remove("error");
    }
  }

  function validatePassword(el) {
    const small = el.parentElement.parentElement.querySelector("small");
    if (el.value !== password2) {
      el.classList.add("error");
      small.textContent = "Your Password Does not match";
      small.classList.add("error");
      console.log();
    } else if (el.value === password2) {
      small.classList.remove("error");
      el.classList.remove("error");
    }
  }
  return (
    <Registerstyle>
      <Container>
        <div className="form__inner">
          <h3 className="logo">thot</h3>
          <form action="#">
            <div>
              <input type="file" name="file" />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter a Username"
                onChange={(user) => setUsername(user.target.value)}
                onBlur={(el) => validateUsername(el.target)}
                required
              />
              <small>Error</small>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Password"
                onChange={(email) => setEmail(email.target.value)}
                required
              />
              <small>Error</small>
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Designer, Writer, Philospher"
                onChange={(role) => setRole(role.target.value)}
              />
              <small>Error</small>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="passwords">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  onChange={(pass) => setPassword(pass.target.value)}
                  onBlur={(el) => validatePassword(el.target)}
                  onKeyUp={(el) => validatePassword(el.target)}
                />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  onChange={(pass2) => setPassword2(pass2.target.value)}
                  onBlur={(el) => validatePassword(el.target)}
                  onKeyUp={(el) => validatePassword(el.target)}
                />
              </div>
              <small>Error</small>
            </div>
            <div>
              <button onClick={handleRegister} type="submit" className="cta">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </Registerstyle>
  );
};

export default Register;
