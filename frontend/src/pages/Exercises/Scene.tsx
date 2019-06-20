import React, { ReactElement } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import Exercises from "components/Exercises";
import Exercise from "components/Exercise";

const Scene = (props: RouteComponentProps): ReactElement => {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/`} component={Exercises} />
      <Route path={`${props.match.path}/:exerciseId`} component={Exercise} />
    </Switch>
  );
};

export default Scene;
