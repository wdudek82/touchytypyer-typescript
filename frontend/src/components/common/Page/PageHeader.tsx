import React, { ReactElement } from "react";

const PageHeader = (): ReactElement => {
  return (
    <div className="page-header">
      <h1 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        New TouchyTyper! [Header]
      </h1>
    </div>
  );
};

export default PageHeader;
