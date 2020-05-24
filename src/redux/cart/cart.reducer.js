import CartActionTypes from "./cart.types";
import { addItemToCartGrouping } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartGrouping(state.cartItems, action.payload), //spread existing values and additional items are added to this array
      };
    default:
      return state;
  }
};

export default cartReducer;
