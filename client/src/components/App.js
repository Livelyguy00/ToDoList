import React from 'react';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import history from '../history';
import { Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return(
    <>
      <Router history={history}>
        <main className='main'>
          <Header/>
          <Switch>
            <Route path='/signup' exact component = { SignUp } />
            <Route path='/signin' exact component = { SignIn } />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;