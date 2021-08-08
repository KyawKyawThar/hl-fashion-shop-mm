import React from "react";

import CollectionsOverview from "../../components/collection-overview/collectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { convertCollectionsSnpashotToMap, firestore } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";


class ShopPage extends React.Component {
  
  unscribeFromAuth = null

  componentDidMount() {
  const collectionRef =  firestore.collection("collections")
   const {updateCollections} = this.props

  collectionRef.onSnapshot(snapShot => {
  const collectionsMap =  convertCollectionsSnpashotToMap(snapShot)
  
  console.log(updateCollections(collectionsMap))
  updateCollections(collectionsMap)
  })
  }

  render() {
    const {match} = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }

 
};

const mapDispatchToProps = dispatch => {
 return {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
 }
}


export default connect(null,mapDispatchToProps) (ShopPage);
