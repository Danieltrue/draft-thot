import React, { useState } from "react";
import Loginstyle from "../style/components/Login";
import Container from "./Container";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../function/loginValidation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const small = e.target.querySelectorAll("small");
    const btn = e.target.querySelector("button");
    small.forEach((el) => {
      if (el.classList.contains("error")) {
        btn.disabled = true;
        return "Pleas Check Form";
      }
    });
  }
  return (
    <Loginstyle>
      <Container>
        <div>
          <h3 className="logo">
            <Link to="/">thout</Link>
          </h3>
          <form action="#" onSubmit={(user) => handleSubmit(user)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                required
                placeholder="Enter Your Email"
                onBlur={(user) => validateEmail(user.target, setEmail)}
              />
              <small>error</small>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="passsword"
                required
                placeholder="Enter Your Password"
              />
              <small>error</small>
            </div>
            <div>
              <button type="submit" className="cta">
                log in
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer login={true} />
    </Loginstyle>
  );
};

export default Login;
