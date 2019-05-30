import React, { ComponentClass, ReactNode } from "react";
import ModalContext from "./Context";

export default function withModal(Component: ComponentClass<any, any>) {
  return function ModalComponent(props: any) {
    return (
      <ModalContext.Consumer>
        {(contexts): ReactNode => <Component {...props} {...contexts} />}
      </ModalContext.Consumer>
    );
  };
}
