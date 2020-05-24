import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text }) => {
  return (
    <Link to={`${to}`}>
      <div className="waves-effect waves-light btn">{text ? text : "Next"}</div>
    </Link>
  );
};

export default Button;
