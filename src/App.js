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
import Leave from './pages/leave/leave'
import Form from './pages/form'
import Form1 from './pages/form1'

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
          <Route path="/leave" component={Leave}>
          </Route>
          <Route path="/form" component={Form}>
          </Route>
          <Route path="/form1" component={Form1}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
