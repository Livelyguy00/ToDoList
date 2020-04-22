import React from 'react';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import Tasks from './tasksComponents/Tasks';
import history from '../history';
import { Router, Switch, Route } from 'react-router-dom';

import { fetchUser } from '../actions/index';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
      <>
        <Router history={history}>
          <main className='main'>
            <Header/>
            <Switch>
              <Route path='/signup' exact component = { SignUp } />
              <Route path='/signin' exact component = { SignIn } />
              <Route path='/' exact component = { Home } />
              <Route path='/tasks' exact component = { Tasks } />
            </Switch>
          </main>
        </Router>
      </>
    );
  }
}

export default connect(null,{
  fetchUser
})(App);