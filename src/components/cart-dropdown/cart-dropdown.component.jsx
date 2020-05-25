import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { cartItemsSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { cartToggle } from "../../redux/cart/cart.actions";

const CartDropDown = (
  { cartItems, history, dispatch } //taking dispatch from other props
) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(cartToggle());
      }}
    >
      Go To Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
