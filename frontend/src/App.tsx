import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import Exercises from "./components/Exercises";
import Exercise from "./components/Exercise";

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

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <GlobalStyles />
      <h1 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        New TouchyTyper!
      </h1>

      <Switch>
        <Route path="/" exact component={Exercises} />
        <Route path="/exercise/:id" component={Exercise} />
      </Switch>
    </div>
  );
};

export default App;
