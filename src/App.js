import React, { Component } from 'react';
import './main.css';
import LoginForm from './components/auth/LoginForm';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';
import { loadUser } from './actions/auth';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Homepage from './components/homepage/homepage';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/challenges/Dashboard';
import ExerciseBoard from './components/exercises/ExerciseBoard';
<<<<<<< HEAD
import ExerciseList from './components/exercises/ExerciseList';
import ChallengeCreate from './components/challenges/ChallengeCreate';
import ExerciseCreate from './components/exercises/ExerciseCreate';
import HomeLogged from './components/homepage/homeLogged';
=======
import editor from './components/editor/AceEditor.js';
>>>>>>> 8c2e57cf

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/logged' component={HomeLogged} />
            <Route exact path='/exercises' component={ExerciseBoard} />
            <Route exact path='/challenges' component={Dashboard} />
            <Route exact path='/createChallenge' component={ChallengeCreate} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/login' component={LoginForm} />
<<<<<<< HEAD
            <Route exact path='/ExerciseList' component={ExerciseList} />
            <Route exact path='/createExercise' component={ExerciseCreate} />
=======
            <Route exact path='/editor' component={editor}/>
>>>>>>> 8c2e57cf
          </Switch>
        </Router>
      </Provider>
    );
  }
}


export default App;
