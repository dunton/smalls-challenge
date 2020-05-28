import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";
import { dataIsInvalid, updateProgress } from "../utils";
import { mobileBreakpoint } from "../styles/breakpoints";

const CatNames = (props) => {
  const { data, updateData } = useContext(CatContext);

  const [name, setName] = useState("");
  const [savedCatNames, setSavedCatNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    let capitalizedWords = [];

    for (let word of name.split(" ")) {
      capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }

    setSavedCatNames([...savedCatNames, capitalizedWords.join(" ")]);
    setName("");
  };

  const removeCatName = (i) => {
    let names = savedCatNames;
    names.splice(i, 1);
    setSavedCatNames([...names]);
  };

  const handleButtonClick = () => {
    const newData = data.map((obj, i) => {
      obj.name = savedCatNames[i];
      return obj;
    });
    updateData(newData);
    updateProgress(75);
  };

  // check if data is invalid, this way someone can't just stumble onto this page
  // if data invalid redirect to homepage
  if (dataIsInvalid(data)) {
    return <Redirect to="/" />;
  }
  return (
    <Page>
      <Container>
        <h4>
          You have <span>{data.length}</span>&nbsp;cats. Please enter the names
          of your cats below!
        </h4>
        <div>
          <CatNameForm onSubmit={handleSubmit}>
            <input
              placeholder="Cat name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn ">
              Enter
            </button>
          </CatNameForm>
        </div>
        {savedCatNames.length > 0 && (
          <div>
            <h6>Your cats:</h6>
            <div className="cat-name-container">
              {savedCatNames.map((name, i) => (
                <div key={`saved-cat-${i}`} onClick={() => removeCatName(i)}>
                  <span>{name}</span>
                  <i className="small material-icons">clear</i>
                </div>
              ))}
            </div>
          </div>
        )}
        {savedCatNames.length === data.length && (
          <div className="button-holder" onClick={handleButtonClick}>
            <Button to={`cat-build-${savedCatNames[0]}`} />
          </div>
        )}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  h4 {
    font-size: 48px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
      font-size: 38px;
      margin-bottom: 30px;
    }
    span {
      color: #ee6e73;
    }
  }

  h6 {
    font-size: 32px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
      font-size: 26px;
    }
  }
  .cat-name-container {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 50px;
    div {
      background: grey;
      border-radius: 5px;
      text-align: center;
      margin-right: 10px;
      font-size: 20px;
      background: #ee6e73;
      color: white;
      cursor: pointer;
      margin-top: 10px;
      span {
        padding: 5px;
      }
    }
  }

  .button-holder {
    display: flex;
    justify-content: flex-end;
  }
`;

const CatNameForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  input {
    width: 85%;
    margin-right: 5px;
    &:focus {
      box-shadow: none;
    }
  }
  button {
    font-size: 20px;
    border: 1px solid #26a69a;
    background: #26a69a;
    color: white;
    &:hover {
      color: #26a69a;
      background: white;
    }
  }
`;

export default CatNames;
