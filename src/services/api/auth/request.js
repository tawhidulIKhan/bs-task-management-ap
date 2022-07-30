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

const AuthManager = {
  login,
};

export default AuthManager;
