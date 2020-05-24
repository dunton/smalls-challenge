import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../styles/Page";
import { CatContext } from "../contexts/catContext";
import Button from "./Button";

const Plan = (props) => {
  const { data } = useContext(CatContext);

  const handleClick = () => {
    console.log("data", data);
  };
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
