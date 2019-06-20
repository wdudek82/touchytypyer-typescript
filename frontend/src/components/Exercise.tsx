import React, { BaseSyntheticEvent, Component, ReactElement } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { compose, withApollo, WithApolloClient } from "react-apollo";
import withModal from "context/modal";
import hash from "object-hash";

import { ExerciseItem } from "types/exercises";
import { WithModalProps } from "context/modal/Context";
import { Line } from "./TextFragments";
import AddOrUpdateExerciseModal from "./AddOrUpdateExerciseModal";
import { GetExerciseData, GetExerciseQuery, GetExerciseVariables } from "./queries";

type Props = WithApolloClient<RouteComponentProps<{ exerciseId: string }> & WithModalProps>;

interface State {
  textTypedByUser: string;
  exercise: ExerciseItem;
}

class Exercise extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      textTypedByUser: "",
      exercise: { id: "", title: "", body: "" },
    };
  }

  public componentDidMount(): void {
    this.refocusMainInput();

    this.loadExercise();
  }

  private refocusMainInput = (): void => {
    const refInput = this.inputRef.current;

    if (refInput) {
      refInput.focus();
    }
  };

  private loadExercise = async () => {
    const res = await this.props.client.query<GetExerciseData,
      GetExerciseVariables>({
      query: GetExerciseQuery,
      variables: {
        where: {
          id: this.props.match.params.exerciseId,
        },
      },
    });

    console.log("[Exercise] exercise:", res.data.exercise);

    this.setState({
      exercise: res.data.exercise,
    });
  };

  private splitTextToLines = (): string[] => {
    if (!this.state.exercise) return [];

    const re = /[\w\W]{1,45}[.!?\s]/g;
    const normalizedText = this.state.exercise.body.replace(/\s+/g, " ");
    return normalizedText.match(re) || [];
  };

  private renderLines = (): ReactElement[] => {
    const { textTypedByUser } = this.state;
    const exercise = { id: 0, title: "AddOrUpdateExerciseModal", text: "Bar" };
    let totalLength = 0;

    return this.splitTextToLines().map(
      (line, ind): ReactElement => {
        const key = hash(`${exercise.id}${ind}${line}`);
        const typedLineText = textTypedByUser.slice(
          totalLength,
          totalLength + line.length,
        );

        const isCurrent =
          textTypedByUser.length >= totalLength &&
          textTypedByUser.length <= totalLength + line.length - 1;

        totalLength += line.length;

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
    const textTypedByUser = e.currentTarget.value;

    this.setState(() => ({ textTypedByUser }));
  };

  private onEdit = (): void => {
    this.props.showModal(AddOrUpdateExerciseModal, {
      onCancel: (): void => this.props.hideModal(),
    });
  };

  private readonly inputRef: React.RefObject<HTMLInputElement>;

  public render(): ReactElement {
    const { textTypedByUser } = this.state;
    const { title } = this.state.exercise;

    return (
      <div className="exercise__page">
        <Link to="/">Go Back</Link>

        <h2>{title}</h2>

        <input
          className="exercise__main-input"
          type="text"
          ref={this.inputRef}
          value={textTypedByUser}
          onChange={this.handleOnChange}
          onBlur={this.refocusMainInput}
        />

        <section className="exercise exercise__container">
          <div className="exercise exercise__item">{this.renderLines()}</div>
        </section>
      </div>
    );
  }
}

export default compose(
  withApollo,
  withModal,
)(Exercise);
