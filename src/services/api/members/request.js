import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { getAxiosHeader } from '../../../utils/helpers';
import { mapMembersFromServerToClient, mapMemberFromServerToClient, mapMeta } from './mapper';
/**
 * function to fetch all members
 * @param {page,queryparams} request 
 * @returns data, meta
 */
const all = async (request) => {
 const response = await axios({
  method: 'get',
  url:endpoints.MEMBERS_API,
  params: {
    page: request.currentPage
  },
  headers: getAxiosHeader()
 }
  )
  return {
    data: mapMembersFromServerToClient(response.data.data),
    meta: mapMeta(response.data.meta)
  }
}

const getAll = async (request) => {
  const response = await axios({
   method: 'get',
   url:endpoints.MEMBERS_ALL_API,
   params: {},
   headers: getAxiosHeader()
  }
   )
   console.log(response.data);
   return {
     data: mapMembersFromServerToClient(response.data.data),
   }
 }
 
 const create = async (request) => {
  const response = await axios({
   method: 'post',
   url:endpoints.MEMBERS_CREATE_API,
   data: {
    name: request.name,
    email: request.email || '',
   },
   headers: getAxiosHeader()
  });
   return {
     data: response.data,
   }
 }

 const update = async (request) => {
  const response = await axios({
   method: 'post',
   url:endpoints.MEMBERS_UPDATE_API.replace(':id', request.id),
   data: {
    id: request.id,
    name: request.name,
    email: request.email,
    '_method': 'PUT'
   },
   headers: getAxiosHeader()
  });
   return {
     data: response.data,
   }
 }

 const show = async (request) => {
  const response = await axios({
    method: 'get',
    url:endpoints.MEMBERS_DETAILS_API.replace(':id', request.id),
    headers: getAxiosHeader()
   });
   return {
    data: mapMemberFromServerToClient(response.data),
  }
}

const remove = async (request) => {
  const response = await axios({
    method: 'post',
    url:endpoints.MEMBERS_DETAILS_API.replace(':id', request.id),
    data: {
      '_method': 'DELETE'
    },
    headers: getAxiosHeader()
   });
   return {
    data: response.data,
  }
}

const MemberManager = {
  all,
  getAll,
  create,
  show,
  remove,
  update
}

export default MemberManager;
