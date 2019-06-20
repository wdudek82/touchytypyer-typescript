import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withApollo, WithApolloClient } from "react-apollo";
import { ApolloQueryResult } from "apollo-client";
import { ExerciseItem } from "types/exercises";
import { WithModalProps } from "context/modal/Context";
import { GetExercisesData, GetExercisesQuery } from "./queries";
import "./styles.scss";

type Props = WithApolloClient<WithModalProps>;

const Exercises = (props: Props): ReactElement => {
  const [exercises, setExercises] = useState();

  const loadExercises = async (): Promise<ApolloQueryResult<GetExercisesData>> => {
    const res = await props.client.query<GetExercisesData>({
      query: GetExercisesQuery,
    });

    setExercises(res.data.exercises);

    console.log("[Exercises] exercises", res.data.exercises);

    return res;
  };

  useEffect(() => {
    loadExercises();
  });

  const renderExercises = (): ReactElement | ReactElement[] => {
    if (!exercises) return <div>Loading...</div>;

    return exercises.map(
      (exercise: ExerciseItem): ReactElement => (
        <li key={exercise.id}>
          <Link to={{ pathname: `/exercises/${exercise.id}` }}>
            {exercise.title}
          </Link>
        </li>
      ),
    );
  };

  return (
    <div className="exercises-page">
      <h2>Exercises</h2>
      <ul>{renderExercises()}</ul>
    </div>
  );
};

export default withApollo(Exercises);
