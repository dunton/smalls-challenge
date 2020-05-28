import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";
import Error from "./Error";
import { updateProgress } from "../utils";
import { mobileBreakpoint } from "../styles/breakpoints";

const CatCount = (props) => {
  const { updateData } = useContext(CatContext);
  const [catNumber, setCatNumber] = useState(0);
  const [dropdown, toggleDropdown] = useState(false);
  const [error, setError] = useState(false);

  // update progress
  useEffect(() => {
    updateProgress(25);
  }, []);

  // push data and update array
  const handleButtonClick = () => {
    let data = [];
    for (let i = 0; i < catNumber; i++) {
      data.push({ _id: i });
    }
    updateData(data);
  };

  // handle dropdown click
  const handleDropdownItemClick = (i) => {
    setCatNumber(i + 1);
    toggleDropdown(!dropdown);
    setError(false);
  };

  return (
    <Page>
      <Container>
        <h4>How many cats do you have?</h4>
        <div>
          <p>
            I have&nbsp;
            <span
              className="btn init-num"
              onClick={() => toggleDropdown(!dropdown)}
            >
              {catNumber}
            </span>
            &nbsp;cat{catNumber !== 1 && "s"}!
          </p>
          {dropdown && (
            <div className="dropdown">
              {[...Array(20)].map((x, i) => (
                <span
                  key={`cat-number-${i}`}
                  className="btn"
                  onClick={() => handleDropdownItemClick(i)}
                >
                  {i + 1}
                </span>
              ))}
              <span
                className="btn"
                onClick={() =>
                  setError("You have a lot of cats! Please give us a call")
                }
              >
                20+
              </span>
            </div>
          )}
        </div>
        {catNumber !== 0 && !error && (
          <div className="button-holder" onClick={handleButtonClick}>
            <Button to="/cat-names" />
          </div>
        )}
        {error && <Error err={error} />}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  h4 {
    font-size: 42px;
    margin: 20px 0;
  }
  p {
    font-size: 26px;
  }

  .init-num {
    width: 50px;
    height: 35px;
  }
  .dropdown {
    max-height: 200px;
    max-width: 400px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
      max-width: 250px;
    }
    overflow-y: scroll;
    display: inline-flex;
    flex-direction: row;
    > div {
      border: 1px solid white;
      max-width: 50px;
      display: block;
    }
  }
  .button-holder {
    display: flex;
    justify-content: flex-end;
  }
`;

export default CatCount;
