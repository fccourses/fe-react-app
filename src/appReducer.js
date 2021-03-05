import { ACTIONS } from './constants';

const handlers = {
  [ACTIONS.MENU_CLOSE]: (state, action) => {
    return {
      ...state,
      isMenuOpen: false,
    };
  },
  [ACTIONS.MENU_OPEN]: (state, action) => {
    return {
      ...state,
      isMenuOpen: true,
    };
  },
};

const appReducer = (state, action) => {
  return handlers[action.type](state, action);
};
export default appReducer;
