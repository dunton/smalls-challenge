import React, { createContext, useState } from "react";

const CatContext = createContext();

const CatContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [stage, setStage] = useState(0);
  const updateData = (catData) => {
    setData(catData);
  };

  const updateStage = (stage) => {
    setStage(stage);
  };

  return (
    <CatContext.Provider value={{ updateData, data, updateStage, stage }}>
      {props.children}
    </CatContext.Provider>
  );
};

export { CatContext, CatContextProvider };
