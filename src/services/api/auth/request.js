import axios from 'axios';
import endpoints from '../../../config/endpoints';
import { mapAuthFromServerToClient } from './mapper';

const login = async (request) => {
    const response = await axios.post(endpoints.LOGIN_API, {
        email: request.username,
        password: request.password
    })
    if(response){
        return {
            data: mapAuthFromServerToClient(response.data)
        }
    }
}

const AuthManager = {
    login
}

export default AuthManager;
