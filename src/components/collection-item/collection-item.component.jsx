import React from "react";
import "./collection-item.styles.scss";

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
  </div>
);

export default CollectionItem;
