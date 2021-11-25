import React from "react";
import ReactDOM from "react-dom";
import Containerstyle from "../style/components/Containerstyle";

const Container = (props) => {
  return <Containerstyle>{props.children}</Containerstyle>;
};

export default Container;
