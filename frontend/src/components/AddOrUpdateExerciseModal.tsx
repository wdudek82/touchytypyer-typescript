import React, { Component } from "react";

interface Props {
  onCancel: () => void;
}

interface State {
  foo: string;
}

class AddOrUpdateExerciseModal extends Component<Props, State> {
  public state = { foo: "bar" };

  public render() {
    return (
      <div>
        Foo
        {/*<Modal*/}
        {/*  title="Basic Modal"*/}
        {/*  visible={true}*/}
        {/*  onOk={this.props.onCancel}*/}
        {/*  onCancel={this.props.onCancel}*/}
        {/*>*/}
        {/*  <p>Some contents...</p>*/}
        {/*  <p>Some contents...</p>*/}
        {/*  <p>Some contents...</p>*/}
        {/*</Modal>*/}
      </div>
    );
  }
}

export default AddOrUpdateExerciseModal;
