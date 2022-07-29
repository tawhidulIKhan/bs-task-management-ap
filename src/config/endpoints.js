
const API_ENDPOINT = process.env.REACT_APP_API_URL;

const endpoints = {
  LOGIN: "/login",
  LOGIN_API: `${API_ENDPOINT}/login`,
  DASHBOARD: '/',
  TASKS: "/tasks",
  TASKS_CREATE: "/tasks/create",
  TASKS_CREATE_API: `${API_ENDPOINT}/tasks/create`,
  MEMBERS: "members",
  MEMBERS_API: `${API_ENDPOINT}/members`,
  MEMBERS_CREATE: "/members/create",
  MEMBERS_CREATE_API: `${API_ENDPOINT}/members/create`,
}
export default endpoints;
