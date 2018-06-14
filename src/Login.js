import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Router, Route, Switch } from 'react-router';
import { NavLink, Link, withRouter, Redirect } from "react-router-dom";
import './App.css';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = ({
      username : "",
      password : "",
    })
    this.onClickLoginButton = this.onClickLoginButton.bind(this);
  }
  render() {
    return (
      <div>
        <AppBar position="static" color="default" class="header">
                <Toolbar>
                  <Typography variant="title" color="inherit" class="subheader">
                    Easy Bucket Building
                  </Typography>
                </Toolbar>
        </AppBar>
        <TextField
          class="textfield"
          id="Username"
          label="Username"
          value={this.state.username}
          onChange={this.handleChangeForUsername('name')}
          margin="normal"
        />
        <br />
        <TextField
          class="textfield"
          id="password-input"
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangeForPassword('name')}
          margin="normal"
        />
        <br />
        <Button variant="contained" color="primary" class="button" onClick={() => this.onClickLoginButton()}>
        Login
      </Button>
      </div>
    );
  }

  onClickLoginButton(){
    if(this.state.username==='admin' && this.state.password==='admin'){
      console.log('Button Pressed');
      this.props.history.push("/items");
    }
  }

  handleChangeForUsername = name => event => {
    this.setState({
      username : event.target.value
    });
  }

  handleChangeForPassword = name => event => {
    this.setState({
      password : event.target.value
    });
  }
}

export default withRouter(Login);
