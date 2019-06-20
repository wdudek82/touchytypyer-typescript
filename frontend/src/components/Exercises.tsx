import React, { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withApollo, WithApolloClient } from "react-apollo";
import { ApolloQueryResult } from "apollo-client";
import { ExerciseItem, ExercisesState } from "../types/exercises";
import { WithModalProps } from "../context/modal/Context";
import { GetExercisesData, GetExercisesQuery } from "./queries";

interface StateProps {
  exercisesState: ExercisesState;
}

type CompProps = WithApolloClient<{} & StateProps & WithModalProps>;

const Exercises = (props: CompProps): React.ReactElement => {
  const [exercises, setExercises] = useState();

  const getExercises = async (): Promise<ApolloQueryResult<GetExercisesData>> => {
    const res = await props.client.query<GetExercisesData>({
      query: GetExercisesQuery,
    });

    setExercises(res.data.exercises);

    console.log(res);

    return res;
  };

  useEffect(() => {
    getExercises();
  }, []);

  const renderExercises = (): ReactElement | ReactElement[] => {
    if (!exercises) return <div>Loading...</div>;

    return exercises.map(
      (exercise: ExerciseItem): ReactElement => (
        <li key={exercise.id}>
          <Link to={{ pathname: `/exercises/${exercise.id}`, state: exercise }}>
            {exercise.title}
          </Link>
        </li>
      ),
    );
  };

  return (
    <div>
      <h2>Exercises</h2>
      <ul>{renderExercises()}</ul>
    </div>
  );
};

function mapStateToProps(state: StateProps): StateProps {
  return {
    exercisesState: state.exercisesState,
  };
}

export default withApollo(connect(mapStateToProps)(Exercises));
