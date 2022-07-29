import { mapTasksFromServerToClient } from './mapper';
import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { getAxiosHeader } from '../../../utils/helpers';
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

const create = async (request) => {
  const response = await axios({
   method: 'post',
   url:endpoints.TASKS_CREATE_API,
   data: request,
   headers: getAxiosHeader()
  });
   return {
     data: response.data,
   }
 }

const TaskManager = {
  all,
  create
}

export default TaskManager;
