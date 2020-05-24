import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../styles/Page";
import { CatContext } from "../contexts/catContext";

const Plan = (props) => {
  const { data } = useContext(CatContext);
  console.log(data);
  return (
    <Page>
      <Container>plan</Container>
    </Page>
  );
};

const Container = styled.div``;

export default Plan;
