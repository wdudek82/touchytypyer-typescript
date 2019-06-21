import React, { Component, ReactNode } from "react";
import { Page, PageContent, PageHeader } from "components/common/Page";
import withModal from "context/modal";
import { WithModalProps } from "context/modal/Context";
import { Exercises } from "components/Exercises";
import { RouteComponentProps } from "react-router";

type Props = WithModalProps & RouteComponentProps<{ exerciseId: string }>;

class OverviewPage extends Component<Props> {
  public render(): ReactNode {
    return (
      <Page className="page--exercises-overview">
        <PageHeader />
        <PageContent>
          <Exercises />
        </PageContent>
      </Page>
    );
  }
}

export default withModal(OverviewPage);
