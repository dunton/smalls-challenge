import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../styles/breakpoints";

const Page = (props) => {
  const [loaded, setLoaded] = useState("");
  useEffect(() => {
    setLoaded("loaded"); // gives us a nice transition effect
  }, []);
  return (
    <Container>
      <div className={loaded}>{props.children}</div>
    </Container>
  );
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
  > div {
    opacity: 0;
    width: 100%;
    transition: 0.2s ease-in;
    &.loaded {
      opacity: 1;
    }
  }
`;

export default Page;
