import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CartDropDown);
