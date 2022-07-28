/**
 * function to fetch all tasks
 * @param {page,queryparams} request 
 * @returns data, meta
 */
const all = (request) => {
  return {
    data: [],
    meta: null
  }
}

const TaskManager = {
  all
}

export default TaskManager;