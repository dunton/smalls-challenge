import React, { useContext } from "react";
import styled from "styled-components";
import { CatContext } from "../contexts/catContext";

const Header = (props) => {
  const { stage, data } = useContext(CatContext);
  const width = (stage / 4) * 100;

  return (
    <Container width={width}>
      <div>
        <h1>Smalls</h1>
      </div>
      {stage !== 0 && (
        <div className="progress">
          <div></div>
        </div>
      )}
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
      height: 20px;
      width: 80%;
      margin: 10px auto;
      background: white;
      border-radius: 5px;
      > div {
        position: absolute;
        background: #26a69a;
        left: 0;
        height: 20px;
        width: ${(props) => props.width}%;
        transition: 1s ease-in;
      }
    }
  }
`;

export default Header;
