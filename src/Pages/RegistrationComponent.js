import React from "react";
import {connect} from "react-redux";

import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserService from '../services/UserService';

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			repeatedPassword: '',
			message: ''
		};
	}

	register(event){
		if(this.state.password != this.state.repeatedPassword){
			console.log("passwords do not (thank you Lisbeth) match");
			return;
		}

		var apiBaseUrl = "http://localhost:4000/users/";

		console.log("values",this.state.username,this.state.password);
		//To be done:check for empty values before hitting submit
		var self = this;
		var payload={
		"username": this.state.username,
		"password":this.state.password
		}
		axios.post(apiBaseUrl, payload)
	   .then(function (response) {
		 console.log(response);
		 if(response.data.code == 200){
		   var loginmessage = "Not Registered yet.Go to registration";
		 }
	   })
	   .catch(function (error) {
		 console.log(error);
	   });
	}
	




	onChange = (e) => {
		this.setState({
		  [e.target.name]: e.target.value
		});
	  };

	// login = (e) => {
	// 	e.preventDefault();
	// 	const credentials = { username: this.state.username, password: this.state.password };
	
	// 	AuthService.login(credentials).then(res => {
	// 	  if (res.status === 200) {
	
	// 		localStorage.setItem("userInfo", JSON.stringify(res.data));
	
	// 		if (AuthService.isAuthenticated()) {
	// 		  console.log("user logged in");
	// 		  console.log(res.data);
	// 		}
	// 	  } else {
	// 		this.setState({ message: res.data.message });
	// 	  };
	// 	});
	//   };


	render() {
		return (
		  // <div>
		  <React.Fragment>
			<Container maxWidth="sm">
			  <Typography variant="h4" className="title-login">
				Registration
			  </Typography>
	
			  <form>
				<Typography variant="h4" className="login-message">
				  {this.state.message}
				</Typography>
	
				<TextField type="text" label="Username" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange} />
				<TextField type="password" label="Password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange} />
				<TextField type="password" label="Repeat Password" fullWidth margin="normal" name="repeatedPassword" value={this.state.repeatedPassword} onChange={this.onChange} />
	
				<Button variant="contained" color="secondary" onClick={(event) => this.register(event)}>
				  Register User
			  </Button>
			  </form>
			</Container>
		  </React.Fragment>
		  // </div>
		);
	  };
}