import React from "react";
import styled from "styled-components";

const Page = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  min-height: 100px;
  width: 100vw;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export default Page;
