import axios from "axios";
import AuthService from "./AuthService";

const USER_API_BASE_URL = "http://localhost:4000/user/";

class UserService {
	registerUser(user) {
		return axios.post(USER_API_BASE_URL + "new", user, AuthService.getAuthHeader());
	}
}
   
export default new UserService();