import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ItemsPage from './ItemsPage.js';
import { Router, Route, Switch } from 'react-router';
import { NavLink, Link, withRouter, Redirect } from "react-router-dom";
import './App.css';
import Login from './Login';
import DeitPlans from './DeitPlans.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      username : "",
      password : "",
    })
  }
  componentDidMount() {
    this.props.history.push("/diets");
  }
  render() {
    return (
      <Switch>
      <Route path = "/login" component={Login} /> 
      <Route path="/items" component={ItemsPage} />
      <Route path="/diets" component={DeitPlans} />
      </Switch>
    );
  }
}

export default withRouter(App);
