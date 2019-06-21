import React, { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

const PageContent = (props: Props): ReactElement => {
  return <div className="page-content">{props.children}</div>;
};

export default PageContent;
