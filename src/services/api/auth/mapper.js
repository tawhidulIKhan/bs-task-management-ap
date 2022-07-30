/**
 * Map authentication object
 * @param {object} object with user and token
 * @returns {object} mapped object with token and user
 */

export const mapAuthFromServerToClient = (data) => ({
  token: data.token,
  user: {
    ...data.user,
    username: data.user.name,
  },
});
