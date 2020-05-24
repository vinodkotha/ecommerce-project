import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cartsvgimg.svg";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleHidden }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(cartToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
