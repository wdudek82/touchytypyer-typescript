import React, { ChangeEvent, Component, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Query, QueryResult, WithApolloClient } from "react-apollo";
import withModal from "context/modal";
import hash from "object-hash";

import { ExerciseItem } from "types/exercises";
import { WithModalProps } from "context/modal/Context";
import { Line } from "../TextFragments";
import UpdateExerciseModal from "./UpdateExerciseModal/UpdateExerciseModal";
import { GET_EXERCISE, GetExerciseData } from "./queries";
import Exercise from "./Exercise";

import "./styles.scss";

interface Props extends WithApolloClient<WithModalProps> {
  exerciseId: string;
}

interface State {
  textTypedByUser: string;
}

class ExerciseContainer extends Component<Props, State> {
  public state = {
    textTypedByUser: "",
  };

  private splitTextToLines = (exerciseText: string): string[] => {
    if (!exerciseText) return [];

    const re = /[\w\W]{1,45}[.!?\s]/g;
    const normalizedText = exerciseText.replace(/\s+/g, " ");
    return normalizedText.match(re) || [];
  };

  private renderLines = (exercise?: ExerciseItem): ReactElement[] => {
    const { textTypedByUser } = this.state;
    let totalLength = 0;

    if (!exercise) return [];

    return this.splitTextToLines(exercise.body).map(
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

  private handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const textTypedByUser = e.currentTarget.value;

    this.setState((): State => ({ textTypedByUser }));
  };

  private onEdit = (): void => {
    this.props.showModal(UpdateExerciseModal, {
      onCancel: (): void => this.props.hideModal(),
    });
  };

  public render(): ReactNode {
    return (
      <div className="exercise__page">
        <section className="exercise__container">
          <aside className="exercise__menu">
            <Link to="/exercises" className="btn">
              Go Back
            </Link>
            <button type="button" onClick={this.onEdit} className="btn">
              Edit
            </button>
          </aside>
          <Query
            query={GET_EXERCISE}
            variables={{
              where: {
                id: this.props.exerciseId,
              },
            }}
          >
            {({
              data,
              loading,
              error,
            }: QueryResult<GetExerciseData>): ReactElement => {
              if (loading) return <div>Loading exercise...</div>;
              if (error || !data) return <p>ERROR</p>;

              const { textTypedByUser } = this.state;

              return (
                <Exercise
                  exercise={data.exercise}
                  textTypedByUser={textTypedByUser}
                  renderLines={this.renderLines}
                  handleOnChange={this.handleOnChange}
                />
              );
            }}
          </Query>
        </section>
      </div>
    );
  }
}

export default withModal(ExerciseContainer);
