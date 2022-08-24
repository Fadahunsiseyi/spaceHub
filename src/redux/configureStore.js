import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';

const rootReducer = combineReducers({
  missionReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
