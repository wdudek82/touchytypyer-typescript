import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Exercises from './components/Exercises';
import Exercise from './components/Exercise';

interface ExercisesState {
  exercises: { id: number; title: string; text: string }[];
}

interface OwnProps {
}

interface StateProps {
  exercisesState: ExercisesState;
}

type CompProps = StateProps;

class App extends Component<CompProps> {
  public render(): React.ReactElement {
    return (
      <div className="App">
        <h1>New TouchyTyper!</h1>

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Exercises exercises={this.props.exercisesState.exercises} />
            )}
          />
          <Route
            path="/exercise/:id"
            render={(props) => <Exercise exercise={props.location.state} />}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state: StateProps, ownProps: OwnProps) {
  return {
    exercisesState: state.exercisesState,
  };
}

export default connect(mapStateToProps)(App);
