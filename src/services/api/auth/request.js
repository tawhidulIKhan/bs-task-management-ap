import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { mapAuthFromServerToClient } from './mapper';

/**
 * Autheticate user
 * @param {string} username
 * @param {string} password
 * @returns {object} object with token and user
 */
const login = async (request) => {
  const response = await axios.post(endpoints.LOGIN_API, {
    username: request.username,
    password: request.password,
  });
  if (response) {
    return {
      data: mapAuthFromServerToClient(response.data),
    };
  }
};

/**
 * Sign up user
 * @param {object} object with name, username, password, confirm_password
 * @returns {object} object with token and user
 */
const register = async (request) => {
  const response = await axios.post(endpoints.REGISTER_API, {
    name: request.name,
    username: request.username,
    password: request.password,
    password_confirmation: request.confirm_password,
  });
  if (response) {
    return {
      data: response.data,
    };
  }
};

const AuthManager = {
  login,
  register,
};

export default AuthManager;
