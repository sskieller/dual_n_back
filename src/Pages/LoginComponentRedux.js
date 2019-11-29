import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../redux/actions';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.name
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }


  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm">
          <Typography variant="h4" className="title-login">
            Login
          </Typography>

          <form>
            <Typography variant="h4" className="login-message">
              {this.state.message}
            </Typography>

            <TextField
              type="text"
              label="Username"
              fullWidth margin="normal"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />

            <TextField
              type="password"
              label="Password"
              fullWidth margin="normal"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />

            <Button
              variant="contained"
              color="secondary"
              type="submit">
              Login
          </Button>
          </form>
        </Container>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);