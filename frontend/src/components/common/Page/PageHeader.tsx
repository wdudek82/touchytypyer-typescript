import React, { ReactElement } from "react";
import Navbar from "ui/Navbar";

const PageHeader = (): ReactElement => {
  return (
    <header className="page__header">
      <Navbar />

      <h1>TouchyTyper v2</h1>
    </header>
  );
};

export default PageHeader;
