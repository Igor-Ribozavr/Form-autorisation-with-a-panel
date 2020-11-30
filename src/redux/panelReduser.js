import { RECEIVE_ALL, ADD, COUNT } from './actionTypes';

const defaultState = {
  loading: false,
  count: [],
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
        creature: action.payload,
      };
    case COUNT:
      return {
        ...state,
        count: [...action.payload],
      };
    default:
      return state;
  }
};
