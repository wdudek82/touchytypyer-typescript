import React, { ReactNode } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ExercisesScene from "pages/Exercises/Scene";

import "theme/index.scss";

const renderRoutes = (): ReactNode => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        New TouchyTyper!
      </h1>

      <Switch>
        <Switch>
          <Redirect exact path="/" to="/exercises" />
          <Route path="/exercises" component={ExercisesScene} />
        </Switch>
      </Switch>
    </>
  );
};

const App = (): React.ReactElement => {
  return <div className="App">{renderRoutes()}</div>;
};

export default App;
