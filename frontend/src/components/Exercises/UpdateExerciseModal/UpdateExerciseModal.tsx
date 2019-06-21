import React, { Component, ReactNode } from "react";
import "./UpdateExerciseModal.scss";

interface Props {
  onCancel: () => void;
}

class UpdateExerciseModal extends Component<Props> {
  public state = {};

  public render(): ReactNode {
    return (
      <div className="update-exercise-modal">
        Foo
        <button type="button" onClick={this.props.onCancel}>
          Close
        </button>
      </div>
    );
  }
}

export default UpdateExerciseModal;
