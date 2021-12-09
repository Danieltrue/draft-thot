import React from "react";
import Errorstyle from "../style/components/Errorstyle";

const Error = (props) => {
  return (
    <Errorstyle>
      <p>{props.message}</p>
    </Errorstyle>
  );
};

export default Error;
