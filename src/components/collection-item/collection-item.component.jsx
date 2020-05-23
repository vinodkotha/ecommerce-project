import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ imageUrl, id, name, price }) => (
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

    <CustomButton inverted> Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
