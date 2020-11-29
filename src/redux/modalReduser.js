import { ADD } from "./actionTypes";

const defaultState = {
  loading: false,
};

export const modalReduser = (state = defaultState, action) => {
  switch (action.type) {
    
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
