import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../styles/breakpoints";

const Page = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  min-height: 100px;
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${mobileBreakpoint}px) {
    width: 90%;
  }
`;

export default Page;
