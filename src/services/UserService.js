import axios from "axios";
import AuthService from "./AuthService";

const USER_API_BASE_URL = "https://secure-chamber-96202.herokuapp.com/user/";

class UserService {
	registerUser(user) {
		return axios.post(USER_API_BASE_URL + "new", user, AuthService.getAuthHeader());
	}
}

export default new UserService();