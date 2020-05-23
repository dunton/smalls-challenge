import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to }) => {
  return (
    <Link to={`${to}`}>
      <div className="waves-effect waves-light btn">Next</div>
    </Link>
  );
};

export default Button;
