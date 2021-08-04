import "./collectionOverview.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(CollectionsOverview);
