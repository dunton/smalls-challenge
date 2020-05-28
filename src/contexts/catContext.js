import React, { createContext, useState } from "react";

const CatContext = createContext();

const CatContextProvider = (props) => {
  const [data, setData] = useState([]);

  const updateData = (catData) => {
    setData(catData);
  };

  return (
    <CatContext.Provider value={{ updateData, data }}>
      {props.children}
    </CatContext.Provider>
  );
};

export { CatContext, CatContextProvider };
