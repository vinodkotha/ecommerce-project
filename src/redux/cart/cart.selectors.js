import { createSelector } from "reselect";

const cartState = (state) => state.cartReducer;

//cartItems
export const cartItemsSelector = createSelector(
  [cartState],
  (cartReducer) => cartReducer.cartItems
);

//cartItems count
export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumulateCount, cartItem) => accumulateCount + cartItem.quantity,
      0
    )
);
