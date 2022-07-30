import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { getAxiosHeader } from '../../../utils/helpers';
import {
  mapMembersFromServerToClient,
  mapMemberFromServerToClient,
  mapMeta,
} from './mapper';

/**
 * Get all members
 * @param {object} object with page and other meta
 * @returns {object} data, meta
 */

const all = async (request) => {
  const response = await axios({
    method: 'get',
    url: endpoints.MEMBERS_API,
    params: {
      page: request.currentPage,
    },
    headers: getAxiosHeader(),
  });
  return {
    data: mapMembersFromServerToClient(response.data.data),
    meta: mapMeta(response.data.meta),
  };
};

/**
 * Get all members without pagination
 * @returns {object} data
 */

const getAll = async () => {
  const response = await axios({
    method: 'get',
    url: endpoints.MEMBERS_ALL_API,
    params: {},
    headers: getAxiosHeader(),
  });
  return {
    data: mapMembersFromServerToClient(response.data.data),
  };
};

/**
 * Create new member
 * @param {object} object with user input values
 * @returns {object} data
 */

const create = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.MEMBERS_CREATE_API,
    data: {
      name: request.name,
      email: request.email || '',
    },
    headers: getAxiosHeader(),
  });
  return {
    data: response.data,
  };
};

/**
 * Update member
 * @param {object} object with user input values
 * @returns {object} data
 */

const update = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.MEMBERS_UPDATE_API.replace(':id', request.id),
    data: {
      id: request.id,
      name: request.name,
      email: request.email,
      _method: 'PUT',
    },
    headers: getAxiosHeader(),
  });
  return {
    data: response.data,
  };
};

/**
 * Get member details
 * @param {object} object with id
 * @returns {object} data
 */

const show = async (request) => {
  const response = await axios({
    method: 'get',
    url: endpoints.MEMBERS_DETAILS_API.replace(':id', request.id),
    headers: getAxiosHeader(),
  });
  return {
    data: mapMemberFromServerToClient(response.data),
  };
};

/**
 * Delete member
 * @param {object} object with id
 * @returns {object} data
 */

const remove = async (request) => {
  const response = await axios({
    method: 'post',
    url: endpoints.MEMBERS_DETAILS_API.replace(':id', request.id),
    data: {
      _method: 'DELETE',
    },
    headers: getAxiosHeader(),
  });
  return {
    data: response.data,
  };
};

const MemberManager = {
  all,
  getAll,
  create,
  show,
  remove,
  update,
};

export default MemberManager;
