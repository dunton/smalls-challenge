import React from "react";
import styled from "styled-components";

const Error = ({ err }) => {
  return <Container>{err}</Container>;
};

const Container = styled.div`
  color: red;
  display: flex;
  min-height: 100px;
  margin: 50px 0;
  border: 3px solid red;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export default Error;
