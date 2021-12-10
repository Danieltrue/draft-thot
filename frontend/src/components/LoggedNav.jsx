import React from "react";
import { Link } from "react-router-dom";
import LoggedNavstyle from "../style/components/LoggedNavstyle";
import Container from "./Container";

const LoggedNav = (props) => {
  console.log(props);
  return (
    <LoggedNavstyle>
      <Container>
        <div className="__logo__">
          <h3 className="logo">
            <Link to="/">thot</Link>
          </h3>
        </div>
        <ul>
          <li className="detail">
            <p>{props.user.username}</p>
            <img src={props.user.profileimage} />
          </li>
        </ul>
      </Container>
    </LoggedNavstyle>
  );
};

export default LoggedNav;
