import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { QueryResult } from "react-apollo";
import Query from "react-apollo/Query";
import { ExerciseItem } from "types/exercises";
import { GET_EXERCISES, GetExercisesData } from "./queries";

const Exercises = (props: {}): ReactElement => {
  useEffect(
    (): void => {
      document.title = "TouchyTyper | Exercises";
    },
  );

  const renderExercises = (
    exercises: ExerciseItem[],
  ): ReactElement | ReactElement[] => {
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
    <Query query={GET_EXERCISES}>
      {({
        data,
        loading,
        error,
      }: QueryResult<GetExercisesData>): ReactElement => {
        // TODO: Loading & Error components
        if (loading) return <div>Loading exercises...</div>;
        if (error) return <p>ERROR</p>;

        let exerciseList: ExerciseItem[] = [];
        if (data && data.exercises) {
          exerciseList = data.exercises;
        }

        return (
          <div className="exercises">
            <h2>Exercises</h2>
            <ul>{renderExercises(exerciseList)}</ul>
          </div>
        );
      }}
    </Query>
  );
};

export default Exercises;
