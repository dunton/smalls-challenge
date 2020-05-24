import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";

const CatCount = (props) => {
  const { updateData } = useContext(CatContext);
  const [catNumber, setCatNumber] = useState(0);
  const [dropdown, toggleDropdown] = useState(false);

  const handleButtonClick = () => {
    let data = [];
    for (let i = 0; i < catNumber; i++) {
      data.push({ id: i });
    }
    updateData(data);
  };
  const handleDropdownItemClick = (i) => {
    setCatNumber(i + 1);
    toggleDropdown(!dropdown);
  };
  console.log(catNumber);
  return (
    <Page>
      <Container>
        <h4>How many cats do you have?</h4>
        <div>
          <p>
            I have&nbsp;
            <span className="btn" onClick={() => toggleDropdown(!dropdown)}>
              {catNumber}
            </span>
            &nbsp;cat{catNumber !== 1 && "s"}!
          </p>
          {dropdown && (
            <div className="dropdown">
              {[...Array(20)].map((x, i) => (
                <div
                  key={`cat-number-${i}`}
                  className="btn"
                  onClick={() => handleDropdownItemClick(i)}
                >
                  {i + 1}
                </div>
              ))}
              <div className="btn">20+</div>
            </div>
          )}
        </div>
        {catNumber !== 0 && (
          <div onClick={handleButtonClick}>
            <Button to="/cat-names" />
          </div>
        )}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  .dropdown {
    max-height: 200px;
    overflow-y: scroll;
    > div {
      border: 1px solid white;
      max-width: 50px;
      display: block;
    }
  }
`;

export default CatCount;
