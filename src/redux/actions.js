import Axios from "axios";

const API_URL = "http://localhost:4000/users/";

export const userPostFetch = user => {
	return dispatch => {
		return Axios.post(API_URL + "new", JSON.stringify({ user }))
			.then(resp => resp.json())
			.then(data => {
				if (data.message) {
					// TODO: Have message returned by server
				} else {
					localStorage.setItem("token", data.jwt);
					console.log(localStorage.getItem("token"));
					dispatch(loginUser(data.user));
				}
			});
	};
};

export const userLoginFetch = user => {
	return dispatch => {
		return Axios.post(API_URL + "login", JSON.stringify({ user }))
			.then(resp => resp.json())
			.then(data => {
				if (data.message) {
					// TODO: HJave message returnde by server
				} else {
					localStorage.setItem("token", data.jwt);
					dispatch(loginUser(data.user));
				}
			});
	};
};


const loginUser = userObj => ({
	type: "LOGIN_USER",
	payload: userObj
});