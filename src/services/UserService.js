import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:4000/users/'

class UserService {
  registerUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  loginUser(user) {
    return axios.post(USER_API_BASE_URL + 'login', )
  }
}

export default new UserService();