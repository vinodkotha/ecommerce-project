import CartActionTypes from "./cart.types";

export const cartToggle = () => ({
  type: CartActionTypes.CART_TOGGLE,
});

export const addItem = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem,
});
