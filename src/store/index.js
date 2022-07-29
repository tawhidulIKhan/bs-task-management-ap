import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SessionReducer from './session/reducer.js';
const reducers = combineReducers({
  session: SessionReducer
});

const persistConfig = {
  key: 'test-bs-state',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;
