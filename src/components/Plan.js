import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Page from "../styles/Page";
import { CatContext } from "../contexts/catContext";
import { dataIsInvalid, updateProgress } from "../utils";
import { mobileBreakpoint } from "../styles/breakpoints";

const Plan = (props) => {
  const { data } = useContext(CatContext);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    updateProgress(95);
  }, []);

  const handleClick = () => {
    updateProgress(100);
    setComplete(true);
    console.log("data", data);
  };

  // check if data is invalid, this way someone can't just stumble onto this page
  // if data invalid redirect to homepage
  if (dataIsInvalid(data)) {
    return <Redirect to="/" />;
  }
  return (
    <Page>
      <Container>
        {complete && (
          <div>
            <h2>Congratulations! Your order has been submitted</h2>
          </div>
        )}
        {!complete && (
          <>
            <h4>Review Your Plan</h4>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Weight</th>
                  </tr>
                  {data.map(({ name, breed, age, weight }) => {
                    return (
                      <tr key={`row-${name}`}>
                        <td>{name}</td>
                        <td>{breed}</td>
                        <td>{age}</td>
                        <td>{weight}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="button-holder" onClick={handleClick}>
                <ButtonDiv>Looks Good!</ButtonDiv>
              </div>
            </div>
          </>
        )}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (max-width: ${mobileBreakpoint}px) {
    width: 100%;
  }

  h2,
  h4 {
    text-align: center;
  }

  .button-holder {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }

  th,
  td {
    text-align: center;
  }
`;

const ButtonDiv = styled.div`
  font-size: 20px;
  border: 1px solid #26a69a;
  background: #26a69a;
  color: white;
  width: 150px;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: #26a69a;
    background: white;
  }
`;

export default Plan;
