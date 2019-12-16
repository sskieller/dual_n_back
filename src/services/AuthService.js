import axios from "axios";

const USER_API_BASE_URL = "https://secure-chamber-96202.herokuapp.com:4000/users/";

class AuthService {
	login(credentials) {
		return axios.post(USER_API_BASE_URL + "login", credentials);
	}

	getUserInfo() {
		return JSON.parse(localStorage.getItem("userInfo"));
	}

	isAuthenticated() {
		console.log('getUserInfo from isAuthenticated: ');
		console.log(this.getUserInfo());
		return this.getUserInfo() !== null;
	}

	getAuthHeader() {
		return {
			headers: {
				Authorization: "Bearer " + this.getUserInfo().token
			}
		};
	}

	logout() {
		localStorage.removeItem("userInfo");
		return axios.post(USER_API_BASE_URL + "logout", {}, this.getAuthHeader());
	}
}

export default new AuthService();