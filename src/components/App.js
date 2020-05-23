import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { CatContextProvider } from "../contexts/catContext";
import CatCount from "./CatCount";
import CatNames from "./CatNames";
import CatBuild from "./CatBuild";
import Home from "./Home";

function App() {
  return (
    <CatContextProvider>
      <HashRouter>
        <Switch>
          <Route
            path="/cat-count"
            render={(props) => <CatCount {...props} />}
          ></Route>

          <Route
            path="/cat-names"
            render={(props) => <CatNames {...props} />}
          ></Route>
          <Route path="/cat-build:id" children={<CatBuild />} />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </HashRouter>
    </CatContextProvider>
  );
}

export default App;
