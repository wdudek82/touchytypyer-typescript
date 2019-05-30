import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import Exercises from "components/Exercises";
import Exercise from "../../components/Exercise";

interface Props {
  match: {
    path: string;
  };
}

const Scene = (props: Props): ReactElement => {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/`} component={Exercises} />
      <Route path={`${props.match.path}/:id`} component={Exercise} />
    </Switch>
  );
};

export default Scene;
