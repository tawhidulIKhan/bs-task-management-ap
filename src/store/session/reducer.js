import { RESET_SESSION, SET_SESSION } from './actions';
const initialState = {
  user: null,
  token: '',
};

export default function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_SESSION:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      };
    case RESET_SESSION:
      return {
        ...state,
        token: '',
        user: null,
      };
    default:
      return state;
  }
}
