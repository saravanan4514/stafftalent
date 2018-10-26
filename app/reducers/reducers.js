'use strict';

import * as actionEvents from '../actions/events';

let cloneState = function (state) {
  let clonedState;
  if (state !== undefined) {
    if (state instanceof Array) {
      clonedState = state.map((el) => {
        if (typeof el === 'object') {
          return Object.assign({}, el);
        } else {
          return el;
        }
      });
    } else if (state instanceof Object) {
      clonedState = Object.assign({}, state);
    } else {
      clonedState = state;
    }
  } else {
    clonedState = state;
  }
  return clonedState;
};

export function settings (state, action) {
  let actionType = action.type,
      newState = (state !== undefined) ? cloneState(state) : {};

  if (actionType === actionEvents.SET_SETTINGS) {
    newState = {
      settings: 'settings'
    };
  }

  return newState;
}

export function searchJob (state, action) {
  let actionType = action.type,
      newState = (state !== undefined) ? cloneState(state) : {};

  if (actionType === actionEvents.SET_SEARCH_JOBS) {
    newState = action.payload;
  }

  return newState;
}
