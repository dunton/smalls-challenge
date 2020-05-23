import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CatContext } from "../contexts/catContext";
import Page from "../styles/Page";
import Button from "./Button";

const CatNames = (props) => {
  const { data, updateData } = useContext(CatContext);
  const [name, setName] = useState("");
  const [savedCatNames, setSavedCatNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedCatNames([...savedCatNames, name]);
    setName("");
  };

  const handleButtonClick = () => {
    const newData = data.map((obj, i) => {
      obj.name = savedCatNames[i];
      return obj;
    });
    updateData(newData);
  };
  return (
    <Page>
      <Container>
        <h4>
          You have {data.length} cats. Please enter the names of your cats
          below!
        </h4>
        <div>
          <CatNameForm onSubmit={handleSubmit}>
            <input
              placeholder="Cat name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn">
              Enter
            </button>
          </CatNameForm>
        </div>
        <div>
          <h6>Your cats:</h6>
          <div>
            {savedCatNames.map((name) => (
              <div key={`saved-cat-${name}`}>{name}</div>
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

const Container = styled.div``;

const CatNameForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  input {
    width: 90%;
  }
`;

export default CatNames;
