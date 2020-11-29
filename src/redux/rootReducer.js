import { panelReduser } from './panelReduser';
import { modalReduser } from './modalReduser';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  panelReduser,
  modalReduser,
});
