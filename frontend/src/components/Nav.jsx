import React from "react";
import { Link } from "react-router-dom";
import Navstyle from "../style/components/Navstyle";
import Container from "./Container";

const Nav = () => {
  return (
    <Navstyle>
      <Container>
        <div className="__logo__">
          <h3 className="logo">thot</h3>
        </div>
        <ul>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <li>
            <button>
              <Link to="/register">Get Started</Link>
            </button>
          </li>
        </ul>
      </Container>
    </Navstyle>
  );
};

export default Nav;
