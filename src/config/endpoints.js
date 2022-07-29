
const API_ENDPOINT = process.env.REACT_APP_API_URL;

const endpoints = {
  LOGIN: "/login",
  LOGIN_API: `${API_ENDPOINT}/login`,
  TASKS: "/tasks",
  TASKS_CREATE: "/tasks/create",
  MEMBERS: "members"
}
export default endpoints;
