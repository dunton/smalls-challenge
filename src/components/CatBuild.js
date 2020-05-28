import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";
import { dataIsInvalid, updateProgress, urlParamIsInvalid } from "../utils";

const CatBuild = (props) => {
  const { id } = useParams();
  const { updateData, data } = useContext(CatContext);
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    updateProgress(75);
  }, []);

  const name = id.split("").splice(1).join("");
  const handleSubmit = (e) => {
    e.preventDefault();
    resetFields();
  };

  const resetFields = () => {
    setBreed("");
    setAge("");
    setWeight("");
  };

  const handleNextButtonClick = () => {
    const cat = data[index];
    let newData = data;
    cat.breed = breed;
    cat.age = parseInt(age);
    cat.weight = parseInt(weight);
    newData[index] = cat;
    updateData(newData);
    resetFields();
  };

  let nextIndex = null;
  let index = null;

  data.forEach((el, i) => {
    if (el.name === name) {
      nextIndex = i + 1;
      index = i;
    }
  });

  const isFinal = data.length === nextIndex ? true : false;

  // check if data is invalid, this way someone can't just stumble onto this page
  // if data invalid redirect to homepage

  if (dataIsInvalid(data) || urlParamIsInvalid(name, data)) {
    return <Redirect to="/" />;
  }

  const handleFinalButtonClick = () => {
    handleNextButtonClick();
    updateProgress(95);
  };

  const contentCheck = () => {
    if (breed && age && weight) {
      return true;
    }

    return false;
  };

  return (
    <Page>
      <Container onSubmit={handleSubmit}>
        <div>
          <h4>Tell us more about {name}</h4>
          <form>
            <input
              placeholder="Breed.."
              value={breed}
              type="text"
              onChange={(e) => setBreed(e.target.value)}
            />
            <input
              placeholder="Age..."
              value={age}
              type="number"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              placeholder="Weight..."
              value={weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
            />
            {contentCheck() && !isFinal && (
              <div className="button-holder" onClick={handleNextButtonClick}>
                <Button
                  type="submit"
                  to={`cat-build-${data[nextIndex].name}`}
                />
              </div>
            )}

            {contentCheck() && isFinal && (
              <div className="button-holder" onClick={handleFinalButtonClick}>
                <Button type="submit" to={`plan`} text="See Plan!" />
              </div>
            )}
          </form>
        </div>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  .button-holder {
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
  }
`;

export default CatBuild;
