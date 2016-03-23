import { SET_FILTER } from '../constants/actionType';
import CONST_FILTER from '../constants/constFilter';

let filter = (state = CONST_FILTER.SHOW_ALL, action = null) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;