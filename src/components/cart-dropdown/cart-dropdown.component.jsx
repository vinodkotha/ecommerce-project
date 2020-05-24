import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
