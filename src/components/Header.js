import React from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../styles/breakpoints";

const Header = (props) => {
  return (
    <Container>
      <div>
        <h1>Smalls</h1>
      </div>
      <div className="progress">
        <div id="progress-bar"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: white;

  h1 {
    margin: 20px 0;
    font-size: 60px;
  }
  > div {
    width: 100%;

    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background: #ee6e73;

    &.progress {
      border: 1px solid #26a69a;
      opacity: 0;
      height: 20px;
      width: 80%;
      @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 90%;
      }
      max-width: 1200px;
      margin: 10px auto;
      background: white;
      border-radius: 5px;
      > div {
        position: absolute;
        background: #26a69a;
        left: 0;
        height: 20px;
        width: 0;
        transition: 1s ease-in;
        transition-property: width;
      }
    }
  }
`;

export default Header;
