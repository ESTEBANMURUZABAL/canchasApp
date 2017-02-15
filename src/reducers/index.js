import {combineReducers} from 'redux';
import timingsReducer from './timings';
import canchasReducer from './canchas';
import entities from './entities';

const rootReducer = combineReducers({
  entities,
  timingsReducer,
  canchasReducer
});

export default rootReducer;

