import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from '../Store/feature'
import examReducer from '../Store/exam-feature'



const reducers = combineReducers({
  users: userReducer,
  exam:examReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  blacklist: ['exam']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;