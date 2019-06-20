import React, { BaseSyntheticEvent, Component, ReactElement } from "react";
import { Link, match } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { SET_TYPED_TEXT } from "store/actions/types";
import { ExerciseItem, ExercisesState } from "types/exercises";
import { WithModalProps } from "context/modal/Context";
import withModal from "context/modal";
import Line from "./TextFragments/Line";
import AddOrUpdateExerciseModal from "./AddOrUpdateExerciseModal";

const MainInput = styled.input.attrs({
  type: "text",
})`
  color: transparent;
  background: transparent;
  width: 0;
  height: 0;
  border: none;
  outline: none;
`;

const ExerciseContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

const StyledExercise = styled.article`
  background: #55b5ff;
  border-radius: 5px;
  padding: 2rem;
`;

interface RouterParams {
  id: string;
}

interface RouterProps {
  match: match<RouterParams>;
}

interface StateProps {
  exercisesState: ExercisesState;
}

interface MappedProps {
  exercise: ExerciseItem;
  textTypedByUser: string;
}

interface DispatchProps {
  setTypedText: (text: string) => void;
}

type ComProps = RouterProps & MappedProps & DispatchProps & WithModalProps;

class Exercise extends Component<ComProps> {
  public constructor(props: ComProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  public componentDidMount(): void {
    this.refocusMainInput();
  }

  private refocusMainInput = (): void => {
    const refInput = this.inputRef.current;

    if (refInput) {
      refInput.focus();
    }
  };

  private splitTextToLines = (): string[] => {
    const re = /[\w\W]{1,45}[.!?\s]/g;
    const normalizedText = this.props.exercise.body.replace(/\s+/g, " ");
    return normalizedText.match(re) || [];
  };

  private renderLines = (): ReactElement[] => {
    const { textTypedByUser } = this.props;
    const exercise = { id: 0, title: "AddOrUpdateExerciseModal", text: "Bar" };
    let totalLength = 0;

    return this.splitTextToLines().map(
      (line): ReactElement => {
        const key = `${exercise.id}`;
        const typedLineText = textTypedByUser.slice(
          totalLength,
          totalLength + line.length,
        );

        const isCurrent =
          textTypedByUser.length >= totalLength &&
          textTypedByUser.length <= totalLength + line.length - 1;

        totalLength += line.length;

        console.log("[Exercise] line:", line);
        return (
          <Line
            key={key}
            lineKey={key}
            lineText={line}
            typedLineText={typedLineText}
            isCurrentLine={isCurrent}
          />
        );
      },
    );
  };

  private handleOnChange = (e: BaseSyntheticEvent): void => {
    this.props.setTypedText(e.currentTarget.value);
  };

  private onEdit = (): void => {
    this.props.showModal(AddOrUpdateExerciseModal, {
      onCancel: (): void => this.props.hideModal(),
    });
  };

  private readonly inputRef: React.RefObject<HTMLInputElement>;

  public render(): ReactElement {
    const { title } = this.props.exercise;
    const { textTypedByUser } = this.props;

    return (
      <section>
        <Link to="/">Go Back</Link>

        <h2>{title}</h2>

        <MainInput
          ref={this.inputRef}
          value={textTypedByUser}
          onChange={this.handleOnChange}
          onBlur={this.refocusMainInput}
        />

        <ExerciseContainer>
          <StyledExercise>{this.renderLines()}</StyledExercise>
        </ExerciseContainer>

        <section />
      </section>
    );
  }
}

function mapStateToProps(state: StateProps, comProps: ComProps): MappedProps {
  let exercise = state.exercisesState.exercises.find(
    (e: ExerciseItem) => `${e.id}` === comProps.match.params.id,
  );

  if (!exercise) {
    exercise = { id: -1, title: "Exercise Not found", body: "None" };
  }

  return {
    exercise,
    textTypedByUser: state.exercisesState.textTypedByUser,
  };
}

const mapDispatchToProps = {
  setTypedText: (text: string) => ({ type: SET_TYPED_TEXT, text }),
};

const connectStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connectStore(withModal(Exercise));
