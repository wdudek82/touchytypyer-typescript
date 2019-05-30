import React, { ReactNode } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import ExercisesScene from "pages/Exercises/Scene";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    
    display: flex;
    justify-content: center;
  }
`;

const renderRoutes = (): ReactNode => (
  <Switch>
    <Redirect exact path="/" to="/exercises" />
    <Route path="/exercises" component={ExercisesScene} />
  </Switch>
);

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyles />
      <h1 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        New TouchyTyper!
      </h1>

      {renderRoutes()}
    </div>
  );
};

export default App;
