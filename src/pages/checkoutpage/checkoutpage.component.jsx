import React from "react";
import "./checkoutpage.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartItemsTotalPriceSelector,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block ">
        <span>Product</span>
      </div>
      <div className="header-block ">
        <span>Description</span>
      </div>
      <div className="header-block ">
        <span>Quantity</span>
      </div>
      <div className="header-block ">
        <span>Price</span>
      </div>
      <div className="header-block ">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">total:{total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: cartItemsTotalPriceSelector,
});

export default connect(mapStateToProps)(CheckOutPage);
