import CartActionTypes from "./cart.types";

export const cartToggle = () => ({
  type: CartActionTypes.CART_TOGGLE,
});

export const addItem = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const clearItem = (cartItem) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: cartItem,
});

export const removeItem = (cartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: cartItem,
});
