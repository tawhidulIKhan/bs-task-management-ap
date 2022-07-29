import { SET_SESSION } from './actions';
const initialState = {
  user:null,
  token:''
}

export default function reducer(
  state = initialState,
  {payload, type}
){
  switch (type) {
    case SET_SESSION:
      return {
        ...state,
        token: payload.token,
        user: payload.user
      };
    default:
      return state;
  }
}
