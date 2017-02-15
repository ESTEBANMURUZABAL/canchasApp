import {CANCHAS_URL} from './../constants/config';
import { Schemas } from './../utils/schema';
import { normalize } from 'normalizr';
import isEmpty from 'lodash/isEmpty';

import {
  CANCHAS_REQUEST,
  CANCHAS_SUCCESS,
  CANCHAS_FAILURE,
} from '../constants/ActionTypes';

function canchasRequest() {
  return {
    type: CANCHAS_REQUEST
  }
}

function canchasSuccess(payload) {
  const normalized = normalize(payload.data,Schemas.CANCHAS_ARRAY);
  return {
    type: CANCHAS_SUCCESS,
    entities:normalized.entities
  }
}

function canchasFailure(error) {
  return {
    type: CANCHAS_FAILURE,
    error: error
  }
}

export function fetchCanchas() {
  var url = CANCHAS_URL ;
  return (dispatch,getState) => {
    // if(!isEmpty(getState().entities.timings)) {
    //   return;
    // }
    dispatch(canchasRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(canchasSuccess(json))
      })
      .catch((err)=> {
        dispatch(canchasFailure(err));
      })
  }
}