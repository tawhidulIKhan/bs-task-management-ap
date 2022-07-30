import { mapTasksFromServerToClient, mapTaskFromServerToClient, mapMeta } from './mapper';
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
    url: endpoints.TASKS_API,
    params: {
      page: request.currentPage
    },
    headers: getAxiosHeader()
  });
  return {
    data: mapTasksFromServerToClient(response.data.data),
    meta: mapMeta(response.data.meta)
  };
};

const create = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.TASKS_CREATE_API,
    data: {
      title: request.title,
      description: request.description,
      assigned_to: request.assignedTo
    },
    headers: getAxiosHeader()
  });
  return {
    data: response.data
  };
};

const update = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.TASKS_UPDATE_API.replace(':id', request.id),
    data: {
      id: request.id,
      title: request.title,
      description: request.description,
      assigned_to: request.assignedTo,
      _method: 'PUT'
    },
    headers: getAxiosHeader()
  });
  return {
    data: response.data
  };
};

const show = async (request) => {
  const response = await axios({
    method: 'get',
    url: endpoints.TASKS_DETAILS_API.replace(':id', request.id),
    headers: getAxiosHeader()
  });
  return {
    data: mapTaskFromServerToClient(response.data)
  };
};

const remove = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.TASKS_DETAILS_API.replace(':id', request.id),
    data: {
      _method: 'DELETE'
    },
    headers: getAxiosHeader()
  });
  return {
    data: response.data
  };
};

const TaskManager = {
  all,
  create,
  show,
  update,
  remove
};

export default TaskManager;
