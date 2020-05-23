import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Page from "../styles/Page";
import Button from "./Button";

const CatBuild = (props) => {
  const { id } = useParams();
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const name = id.split("").splice(1).join("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Page>
      <Container onSubmit={handleSubmit}>
        <div>
          <h4>Tell us more about {name}</h4>
          <form>
            <input
              placeholder="Cat type.."
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
            <input
              placeholder="Age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              placeholder="Weight..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </form>
          {breed && age && weight && (
            <div>
              <Button />
            </div>
          )}
        </div>
      </Container>
    </Page>
  );
};

const Container = styled.div``;

export default CatBuild;
