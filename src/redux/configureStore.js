import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducers from './rockets/rocketReducers';
import missionReducer from './missions/missionReducer';

const reducer = combineReducers({
  rocketReducers,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
