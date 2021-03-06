import "./collectionOverview.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
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
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
