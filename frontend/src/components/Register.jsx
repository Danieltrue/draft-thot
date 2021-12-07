import React, { useState } from "react";
import Registerstyle from "../style/components/Registerstyle";
import Container from "./Container";
import Footer from "./Footer";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  validateUsername,
  validateEmail,
  validateRole,
  validatePassword,
} from "../function/registerValidation";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  //set values
  console.log(username);
  console.log(email);
  console.log(role);
  console.log(password);

  return (
    <Registerstyle>
      <Container>
        <div className="form__inner">
          <h3 className="logo">
            <Link to="/">thout</Link>
          </h3>
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
                onBlur={(user) =>
                  validateUsername(user.target, 3, 15, setUsername)
                }
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
                onBlur={(user) => validateEmail(user.target, setEmail)}
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
                onBlur={(user) => validateRole(user.target, 3, 15, setRole)}
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
                  onBlur={(user) =>
                    validatePassword(user.target, 5, password2, setPassword)
                  }
                />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm your password"
                  onChange={(pass2) => setPassword2(pass2.target.value)}
                />
              </div>
              <small>Error</small>
            </div>
            <div>
              <button type="submit" className="cta">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer login={false} />
    </Registerstyle>
  );
};

export default Register;
