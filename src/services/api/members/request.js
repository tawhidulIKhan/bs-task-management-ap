import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { getAxiosHeader } from '../../../utils/helpers';
import { mapMembersFromServerToClient } from './mapper';
/**
 * function to fetch all members
 * @param {page,queryparams} request 
 * @returns data, meta
 */
const all = async (request) => {
 const response = await axios({
  method: 'get',
  url:endpoints.MEMBERS_API,
  headers: getAxiosHeader()
 }
  )
  return {
    data: mapMembersFromServerToClient(response.data.data),
    meta: null
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

const MemberManager = {
  all,
  create
}

export default MemberManager;
