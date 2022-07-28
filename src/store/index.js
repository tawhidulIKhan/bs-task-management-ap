import { configureStore } from '@reduxjs/toolkit'
import SessionReducer from './session/reducer.js';

export const store = configureStore({
  reducer: {
    session: SessionReducer
  },
})