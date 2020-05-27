import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";
import { dataIsInvalid } from "../utils";

const CatNames = (props) => {
  const { data, updateData, updateStage } = useContext(CatContext);
  const [name, setName] = useState("");
  const [savedCatNames, setSavedCatNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedCatNames([...savedCatNames, name]);
    setName("");
  };

  const removeCatName = (i) => {
    let names = savedCatNames;
    const firstHalf = names.slice(0, i);
    const secondHalf = name.slice(i);
    const finalArr = [...firstHalf, secondHalf];
    console.log(finalArr);
  };

  const handleButtonClick = () => {
    const newData = data.map((obj, i) => {
      obj.name = savedCatNames[i];
      return obj;
    });
    updateData(newData);
    updateStage(2);
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
            <button type="submit" className="btn disabled">
              Enter
            </button>
          </CatNameForm>
        </div>
        <div>
          <h6>Your cats:</h6>
          <div className="cat-name-container">
            {savedCatNames.map((name, i) => (
              <div key={`saved-cat-${name}`} onClick={() => removeCatName(i)}>
                <span>{name}</span>
                <i className="small material-icons">clear</i>
              </div>
            ))}
          </div>
        </div>
        {savedCatNames.length === data.length && (
          <div onClick={handleButtonClick}>
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
    span {
      color: #ee6e73;
    }
  }
  .cat-name-container {
    display: flex;
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
      span {
        padding: 5px;
      }
    }
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
    width: 90%;
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
