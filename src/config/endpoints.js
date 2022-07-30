const API_ENDPOINT = process.env.REACT_APP_API_URL;

const endpointsLocal = {
  LOGIN: '/login',
  DASHBOARD: '/',
  TASKS: '/tasks',
  TASKS_DETAILS: '/tasks/:id',
  TASKS_CREATE: '/tasks/create',
  MEMBERS: '/members',
  MEMBERS_DETAILS: '/members/:id',
  MEMBERS_CREATE: '/members/create',
};

const endpointsServer = {
  LOGIN_API: `${API_ENDPOINT}/login`,
  TASKS_API: `${API_ENDPOINT}/tasks`,
  TASKS_DETAILS_API: `${API_ENDPOINT}/tasks/:id`,
  TASKS_UPDATE_API: `${API_ENDPOINT}/tasks/:id`,
  TASKS_CREATE_API: `${API_ENDPOINT}/tasks/create`,
  MEMBERS_API: `${API_ENDPOINT}/members`,
  MEMBERS_ALL_API: `${API_ENDPOINT}/members/all`,
  MEMBERS_CREATE_API: `${API_ENDPOINT}/members/create`,
  MEMBERS_DETAILS_API: `${API_ENDPOINT}/members/:id`,
  MEMBERS_UPDATE_API: `${API_ENDPOINT}/members/:id`,
};

const endpoints = {
  ...endpointsLocal,
  ...endpointsServer,
};

export default endpoints;
