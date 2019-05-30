import React, { Component, ComponentClass, ReactNode } from "react";
import ModalContext from "./Context";

interface State {
  component?: ComponentClass;
  props?: any;
}

class ModalProvider extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      component: undefined,
      props: undefined,
    };
  }

  private showModal = (
    component: ComponentClass<any, any>,
    props: any,
  ): void => {
    console.log("Time to show modal!");
    this.setState(
      (): State => ({
        component,
        props,
      }),
    );
  };

  private hideModal = (): void => {
    this.setState(
      (): State => ({
        component: undefined,
        props: undefined,
      }),
    );
  };

  public render(): ReactNode {
    const value = {
      showModal: this.showModal,
      hideModal: this.hideModal,
    };

    return (
      <ModalContext.Provider value={value}>
        {this.props.children}
        {this.state.component && <this.state.component {...this.state.props} />}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider;
