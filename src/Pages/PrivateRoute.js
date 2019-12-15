import React from "react";
import AuthService from "../services/AuthService";
import { Redirect, Route } from "react-router-dom";


// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={(props) => (
// 		AuthService.isAuthenticated === true
// 			? <Component {...props} />
// 			: <Redirect to={{
// 				pathname: "/user/login",
// 				state: { from: props.location }
// 			}} />
// 	)} />
// );

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            AuthService.isAuthenticated() === true ?
                <Component {...props} />
            : <Redirect to="/user/login" />
        )} />
    );
};

export default PrivateRoute;
