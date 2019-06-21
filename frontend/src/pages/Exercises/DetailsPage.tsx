import React, { Component, ReactNode } from "react";
import { Page, PageContent, PageHeader } from "components/common/Page";
import { Exercise } from "components/Exercises";
import { RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{ exerciseId: string }>;

class DetailsPage extends Component<Props> {
  public render(): ReactNode {
    return (
      <Page>
        <PageHeader />
        <PageContent>
          <Exercise exerciseId={this.props.match.params.exerciseId} />
        </PageContent>
      </Page>
    );
  }
}

export default DetailsPage;
