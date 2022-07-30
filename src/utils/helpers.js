import moment from "moment";
import store from "../store";
import { getSessionToken } from "../store/session/actions";
import { toast } from 'react-toastify';

export const getAxiosHeader = () => {
    const token = getSessionToken(store.getState());
    return {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      }
}

export const successMsg = (msg) => {
    toast.success(msg)
};
