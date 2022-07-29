import { configureStore } from '@reduxjs/toolkit'
import storageManager from '../services/storage.js';
import SessionReducer from './session/reducer.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
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
