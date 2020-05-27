import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({ to, text }) => {
  return (
    <Link to={`${to}`}>
      <ButtonDiv className="waves-effect waves-light btn">
        {text ? text : "Next"}
      </ButtonDiv>
    </Link>
  );
};

const ButtonDiv = styled.div`
  font-size: 20px;
  border: 1px solid #26a69a;
  background: #26a69a;
  color: white;
  &:hover {
    color: #26a69a;
    background: white;
  }
`;

export default Button;
