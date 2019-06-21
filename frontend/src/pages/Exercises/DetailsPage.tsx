import React, { Component, ReactNode } from "react";
import { Exercise } from "components/Exercises";
import { RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{ exerciseId: string }>;

class DetailsPage extends Component<Props> {
  public render(): ReactNode {
    return <Exercise exerciseId={this.props.match.params.exerciseId} />;
  }
}

export default DetailsPage;
