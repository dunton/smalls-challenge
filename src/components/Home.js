import React from "react";
import styled from "styled-components";
import Page from "../styles/Page";
import Button from "./Button";
import { updateProgress } from "../utils";
import { mobileBreakpoint } from "../styles/breakpoints";

const Home = (props) => {
  return (
    <Page>
      <Container>
        <h1>Welcome!</h1>
        <p>
          In order for us to best meet your cats needs we need to get some
          information from you. Click the button below to get started!
        </p>
        <div onClick={() => updateProgress(25)}>
          <Button to="/cat-count" />
        </div>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  width: 75%;
  @media screen and (max-width: ${mobileBreakpoint}px) {
    width: 100%;
  }
  margin: auto;

  h1 {
    margin: 30px 0;
    font-size: 60px;
  }
  p {
    font-size: 28px;
  }
`;

export default Home;
