import { RECEIVE_ALL, ADD, START_FETCH_RECEIVE_ALL } from './actionTypes';

export const receiveDataFunc = (payload) => {
  return {
    type: RECEIVE_ALL,
    payload,
  };
};

export const startFetchReceiveData = () => {
  return {
    type: START_FETCH_RECEIVE_ALL,
  };
};
export const addFunc = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
