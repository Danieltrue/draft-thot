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

  return (
    <Registerstyle>
      <Container>
        <div className="form__inner">
          <h3 className="logo">thout</h3>
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
