import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  exercises: { id: number; title: string; text: string }[];
}

const Exercises = (props: Props): React.ReactElement => {
  const renderExercises = (): React.ReactElement[] => {
    return props.exercises.map((exercise) => (
      <li key={exercise.id}>
        <Link to={{ pathname: `/exercise/${exercise.id}`, state: exercise }}>
          {exercise.title}
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <h2>Exercises</h2>
      <ul>{renderExercises()}</ul>
    </div>
  );
};

export default Exercises;
