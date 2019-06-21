import React, { ReactElement, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode | ReactNode[];
}

const Page = (props: Props): ReactElement => {
  const { className, children } = props;

  return <div className={`page ${className}`}>{children}</div>;
};

Page.defaultProps = {
  className: "",
};

export default Page;
