import React, { createContext, useState } from "react";

const CatContext = createContext();

const CatContextProvider = (props) => {
  const [data, setData] = useState([]);
  const updateData = (catData) => {
    setData(catData);
  };

  const stage = 1;

  return (
    <CatContext.Provider value={{ updateData, data, stage }}>
      {props.children}
    </CatContext.Provider>
  );
};

export { CatContext, CatContextProvider };
