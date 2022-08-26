import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducers from './rockets/rocketReducers';
import missionReducer from './missions/missionReducer';

const rootReducer = combineReducers({
  rocketReducers,
  missionReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(logger, thunk));
export default store;
