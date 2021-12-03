import React from "react";
import Loginstyle from "../style/components/Login";
import Container from "./Container";
import Footer from "./Footer";

const Login = () => {
  return (
    <Loginstyle>
      <Container>
        <div>
          <h3 className="logo">thout</h3>
          <form action="#">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email or Username"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="passsword"
                placeholder="Enter Your Password"
              />
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
