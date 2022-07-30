export const SET_SESSION = 'SET_SESSION';
export const RESET_SESSION = 'RESET_SESSION';

export const setSession = (payload) => ({
  payload,
  type: SET_SESSION,
});

export const resetSession = () => ({
  type: RESET_SESSION,
});

export const isAuthenticated = (state) => state['session'].token !== '';

export const getSessionToken = (state) => state['session'].token;

export const getSessionUser = (state) => state['session'].user;
