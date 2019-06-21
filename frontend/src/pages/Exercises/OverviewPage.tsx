import React, { Component, ReactNode } from "react";
import withModal from "context/modal";
import { WithModalProps } from "context/modal/Context";
import { Exercises } from "components/Exercises";
import { RouteComponentProps } from "react-router";

type Props = WithModalProps & RouteComponentProps<{ exerciseId: string }>;

class OverviewPage extends Component<Props> {
  public render(): ReactNode {
    return <Exercises />;
  }
}

export default withModal(OverviewPage);
