import { createStore, applyMiddleware } from 'redux';
import thunk from '../lib/thunk.js';

let colorReducer = (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ALL_COLORS_FETCH':
    return payload;
  case 'COLOR_FETCH': 
    return payload;
  case 'FAMILY_FETCH':
    return payload;
  case 'RANDOM_FETCH':
    return payload;
  default:
    return state;
  }
};

export default () => createStore(colorReducer, applyMiddleware(thunk));