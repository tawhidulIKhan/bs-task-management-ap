import { mapTasksFromServerToClient } from './mapper';
import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { getAxiosHeader } from '../../../utils/helpers';
/**
 * function to fetch all tasks
 * @param {page,queryparams} request 
 * @returns data, meta
 */
const all = async (request) => {
  const response = await axios({
    method: 'get',
    url:endpoints.TASKS_API,
    data: request,
    headers: getAxiosHeader()
   });
   return {
    data: mapTasksFromServerToClient(response.data.data),
    meta: null
  }
}

const create = async (request) => {
  const response = await axios({
   method: 'post',
   url:endpoints.TASKS_CREATE_API,
   data: {
    title: request.title,
    description: request.description,
    assigned_to: request.assignedTo
   },
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
