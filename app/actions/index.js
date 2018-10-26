'use strict';

import * as actionEvents from './events';
import * as dataRequests from './dataRequests';

export function settings () {
  return {
    type: actionEvents.SET_SETTINGS
  };
}

export function getSettings () {
  return function (dispatch) {
    dispatch(settings());
  };
}

export function setSearchData (data) {
  return {
    type: actionEvents.SET_SEARCH_JOBS,
    payload: data
  };
}

export function getJobResults (details) {
  return function (dispatch) {
    return dataRequests.getJobResults(details)
    .then(function (response) {
      dispatch(setSearchData(response.data));
    })
    .catch(function (error) {
      // Dispatch notification for the showing the error msg in UI
      console.log('error');
    });
  } 
}
