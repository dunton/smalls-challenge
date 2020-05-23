import React from "react";
import styled from "styled-components";
import Page from "../styles/Page";
import Button from "./Button";

const Home = (props) => {
  return (
    <Page>
      <Container>
        <h1>Welcome!</h1>
        <p>
          In order for us to best meet your cats needs we need to get some
          information from you. Click the button below to get started!
        </p>
        <Button to="/cat-count" />
      </Container>
    </Page>
  );
};

const Container = styled.div`
  width: 75%;
  margin: auto;
`;

export default Home;
