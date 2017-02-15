import { Record } from 'immutable';

import {
  CANCHAS_REQUEST,
  CANCHAS_SUCCESS,
  CANCHAS_FAILURE
} from '../constants/ActionTypes'

const InitialState = Record({
  isFetching: false,
  error: null
});

const initialState = new InitialState;

export default function canchasReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CANCHAS_REQUEST:
      return state
        .set('isFetching',true)
        .set('error',null);
    case CANCHAS_SUCCESS:
      return state
        .set('isFetching',false)
        .set('error',null);
    case CANCHAS_FAILURE:
      return state
        .set('isFetching',false)
        .set('error',action.error);
    default:
      return state
  }
}
