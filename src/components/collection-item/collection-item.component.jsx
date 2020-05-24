import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, id, name, price } = item; //destructure needed elements to this component
  return (
    <div className="collection-item">
      <div
        key={id}
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>

      <CustomButton onClick={() => addItemToCart(item)} inverted="inverted">
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)), //dispatces item to the cart addItem action
});

export default connect(null, mapDispatchToProps)(CollectionItem);
