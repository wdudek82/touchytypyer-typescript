import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Exercises from './components/Exercises';
import Exercise from './components/Exercise';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1>New TouchyTyper!</h1>

      <Switch>
        <Route path="/" exact component={Exercises} />
        <Route path="/exercise/:id" component={Exercise} />
      </Switch>
    </div>
  );
};

export default App;
