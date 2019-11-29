import React from "react";
import AuthService from "../services/AuthService";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		AuthService.isAuthenticated === true
			? <Component {...props} />
			: <Redirect to={{
				pathname: "/user/login",
				state: { from: props.location }
			}} />
	)} />
);

export default PrivateRoute;
