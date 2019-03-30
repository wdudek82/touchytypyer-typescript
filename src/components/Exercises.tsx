import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ExercisesState } from '../store/reducers/exercisesReducer';

interface OwnProps {
}

interface StateProps {
  exercisesState: ExercisesState;
}

type CompProps = OwnProps & StateProps;

const Exercises = (props: CompProps): React.ReactElement => {
  const renderExercises = (): React.ReactElement[] => {
    return props.exercisesState.exercises.map((exercise) => (
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

function mapStateToProps(state: StateProps, ownProps: OwnProps): StateProps {
  return {
    exercisesState: state.exercisesState,
  };
}

export default connect(mapStateToProps)(Exercises);
