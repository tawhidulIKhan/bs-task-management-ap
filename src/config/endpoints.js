const API_ENDPOINT = process.env.REACT_APP_API_URL;

const endpoints = {
  LOGIN: '/login',
  LOGIN_API: `${API_ENDPOINT}/login`,
  DASHBOARD: '/',
  TASKS: '/tasks',
  TASKS_API: `${API_ENDPOINT}/tasks`,
  TASKS_DETAILS: '/tasks/:id',
  TASKS_DETAILS_API: `${API_ENDPOINT}/tasks/:id`,
  TASKS_UPDATE_API: `${API_ENDPOINT}/tasks/:id`,
  TASKS_CREATE: '/tasks/create',
  TASKS_CREATE_API: `${API_ENDPOINT}/tasks/create`,
  MEMBERS: '/members',
  MEMBERS_API: `${API_ENDPOINT}/members`,
  MEMBERS_ALL_API: `${API_ENDPOINT}/members/all`,
  MEMBERS_DETAILS: '/members/:id',
  MEMBERS_DETAILS_API: `${API_ENDPOINT}/members/:id`,
  MEMBERS_UPDATE_API: `${API_ENDPOINT}/members/:id`,
  MEMBERS_CREATE: '/members/create',
  MEMBERS_CREATE_API: `${API_ENDPOINT}/members/create`
};
export default endpoints;
