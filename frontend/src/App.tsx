import React, { ReactElement, ReactNode } from "react";
import { Route, Switch } from "react-router-dom";
import ExercisesScene from "pages/Exercises/Scene";
import { Page, PageContent, PageHeader } from "./components/common/Page";

import "theme/index.scss";

const renderRoutes = (): ReactNode => {
  return (
    <Switch>
      <Switch>
        <Route path="/" exact render={(): ReactElement => <div>Home</div>} />
        <Route path="/exercises" component={ExercisesScene} />
        <Route path="/about" render={(): ReactElement => <div>About</div>} />
      </Switch>
    </Switch>
  );
};

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Page>
        <PageHeader />
        <PageContent>{renderRoutes()}</PageContent>
      </Page>
    </div>
  );
};

export default App;
