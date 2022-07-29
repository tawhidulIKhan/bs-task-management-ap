import { mapTasksFromServerToClient } from './mapper';

/**
 * function to fetch all tasks
 * @param {page,queryparams} request 
 * @returns data, meta
 */
const all = (request) => {
  const Tasks = [{id: "1", title: "Task 1", createdAt: "date-111", assignedTo: "Tawhid"}]
  return {
    data: mapTasksFromServerToClient(Tasks),
    meta: null
  }
}

const TaskManager = {
  all
}

export default TaskManager;