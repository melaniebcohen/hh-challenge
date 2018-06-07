import { createStore, applyMiddleware } from 'redux';
import thunk from '../lib/thunk.js';

let colorReducer = (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'COLOR_FETCH': 
    return payload;
  default:
    return state;
  }
};

export default () => createStore(colorReducer, applyMiddleware(thunk));