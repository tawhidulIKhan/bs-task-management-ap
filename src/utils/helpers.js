import moment from "moment";
import store from "../store";
import { getSessionToken } from "../store/session/actions";

export const getAxiosHeader = () => {
    const token = getSessionToken(store.getState());
    return {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      }
}

export const dateFormat = (date) => moment(date).format('DD-MM-YYYY');
