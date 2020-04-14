import React, { Fragment, Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Components/login'; 
import Logout from './Components/Logout'; 

import './App.css';
import LoginForm from './Components/login';

class App extends Component {
  render () {
    return (
    <Switch>
      
      <Route exact path="/" component={Login} />
      <Route exact path="/Logout" component={Logout} />

    </Switch>
    );
  }
}

export default App;
