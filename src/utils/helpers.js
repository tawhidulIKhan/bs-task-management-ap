import store from "../store";
import { getSessionToken } from "../store/session/actions";

export const getAxiosHeader = () => {
    const token = getSessionToken(store.getState());
    return {
        Accept: `application/json`,
        Authorization: `Bearer ${token}`,
      }
}
