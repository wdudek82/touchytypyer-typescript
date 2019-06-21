import React, { ReactElement } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import OverviewPage from "./OverviewPage";
import DetailsPage from "./DetailsPage";

const Scene = (props: RouteComponentProps): ReactElement => {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/`} component={OverviewPage} />
      <Route path={`${props.match.path}/:exerciseId`} component={DetailsPage} />
    </Switch>
  );
};

export default Scene;
