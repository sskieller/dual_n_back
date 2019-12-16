import React from 'react';
import './LoginComponent.css';
import { Redirect, Route } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthService from '../services/AuthService';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    }

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    localStorage.clear();
  }

  login = (e) => {
    e.preventDefault();
    const credentials = { username: this.state.username, password: this.state.password };

    AuthService.login(credentials).then(res => {
      if (res.status === 200) {

        localStorage.setItem("userInfo", JSON.stringify(res.data));

        if (AuthService.isAuthenticated()) {
          console.log("user logged in");
          console.log(res.data);
          window.location.pathname = '/'
        }
      } else {
        this.setState({ message: res.data.message });
      };
    });

  };

  newUser = () => {
    window.location.pathname = '/user/new'

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      // <div>
      <React.Fragment>
        <Container maxWidth="sm">
          <Typography variant="h4" className="title-login">
            Login
          </Typography>

          <form>
            <Typography variant="h4" className="login-message">
              {this.state.message}
            </Typography>

            <TextField type="text" label="Username" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange} />
            <TextField type="password" label="Password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange} />

            <Button className="button-style" variant="contained" color="secondary" onClick={this.login}>
              Login
          </Button>
          </form>
          <div className="newuser-btn">
            <Button className="button-style" variant="contained" color="secondary" onClick={this.newUser}>
              New User
              
            </Button>

          </div>

        </Container>
      </React.Fragment>
      // </div>
    );
  };
};