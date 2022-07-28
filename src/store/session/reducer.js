import { SET_SESSION_TOKEN } from './actions';
const initialState = {
  user:null,
  token:''
}

export default function reducer(
  state = initialState,
  action
){
  switch (action.type) {
    case SET_SESSION_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}