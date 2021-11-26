import React from "react";
import Footerstyle from "../style/components/Footer";
import Container from "./Container";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Footerstyle>
      <Container>
        <div className="class">
          <hgroup>
            <h3 className="logo">thot</h3>
            <p>Thot Simply Made for Sharing Thought</p>
          </hgroup>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="year">
          <p>thot {new Date().getFullYear()} all Right Reserved</p>
        </div>
      </Container>
    </Footerstyle>
  );
};

export default Footer;
