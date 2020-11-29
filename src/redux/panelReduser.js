import { RECEIVE_ALL, ADD } from './actionTypes';

const defaultState = {
  loading: false,
};

export const panelReduser = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL:
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case ADD:
      return {
        ...state,
        loading: true,
        creature: action.payload,
      };
    default:
      return state;
  }
};
