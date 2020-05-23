import React from "react";
import styled from "styled-components";

const Error = ({ err }) => {
  return <Container>{err}</Container>;
};

const Container = styled.div`
  color: red;
  display: flex;
  min-height: 100px;
  border: 1px solid red;
`;

export default Error;
