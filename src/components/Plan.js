import React, { useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Page from "../styles/Page";
import { CatContext } from "../contexts/catContext";
import Button from "./Button";
import { dataIsInvalid } from "../utils";

const Plan = (props) => {
  const { data } = useContext(CatContext);

  const handleClick = () => {
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
          <div onClick={handleClick}>
            <Button text="Looks good!" />
          </div>
        </div>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  width: 80%;
  margin: auto;

  h4 {
    text-align: center;
  }
`;

export default Plan;
