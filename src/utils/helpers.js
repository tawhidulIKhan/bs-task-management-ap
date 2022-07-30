import store from '../store';
import { getSessionToken } from '../store/session/actions';

/**
 * Get axios header object for all axios request
 * @returns {object} object with Accept, Authorization with bearer token
 */

export const getAxiosHeader = () => {
  const token = getSessionToken(store.getState());
  return {
    Accept: `application/json`,
    Authorization: `Bearer ${token}`,
  };
};

/**
 * Set success message in notifier
 * @param {string} message
 */
export const successMsg = (msg) => {
  const container = document.querySelector('#notification-container');
  const notification = `<div>${msg}</div>`;
  container.innerHTML = notification;
  container.style.display = 'flex';
  setTimeout(() => {
    container.innerHTML = '';
    container.style.display = 'none';
  }, 2000);
};
