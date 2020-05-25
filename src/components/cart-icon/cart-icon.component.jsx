import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cartsvgimg.svg";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cart.actions";
import { cartItemsCountSelector } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

//const mapStateToProps = (state) => ({ OR
// const mapStateToProps = ({ cartReducer: { cartItems } }) => {
//   console.log("Iam being called");
//   return {
//     itemsCount: cartItems.reduce(
//       (accumulatorQty, cartItem) => accumulatorQty + cartItem.quantity,
//       0
//     ), //javascript reduce method can be used for counting cart items
//   };
// };

const mapStateToProps = (state) => {
  console.log("I am being called");
  return { itemsCount: cartItemsCountSelector(state) };
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(cartToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
