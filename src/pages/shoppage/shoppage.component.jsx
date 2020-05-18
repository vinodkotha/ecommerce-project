import React from "react";
import SHOP_DATA from "./shoppage-data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(
          //... spreading the remaining properties of collection to send as props for collectionPreview
          ({ id, ...otherCollectionPreviewProps }) => (
            <CollectionPreview key={id} {...otherCollectionPreviewProps} />
          )
        )}
      </div>
    );
  }
}

export default ShopPage;
