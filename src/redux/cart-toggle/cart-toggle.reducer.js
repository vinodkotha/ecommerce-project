import CartActionTypes from "./cart-toggle.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartToggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartToggleReducer;
