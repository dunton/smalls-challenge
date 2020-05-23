import React from "react";
import styled from "styled-components";

const Page = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export default Page;
