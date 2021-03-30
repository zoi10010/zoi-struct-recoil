import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Account from './pages/account/account'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/dashboard" component={Dashboard}>
          </Route>
          <Route path="/account" component={Account}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
