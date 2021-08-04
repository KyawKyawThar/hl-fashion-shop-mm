import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopItems],
  //change collections obj to Array
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const selectCollection = (collectionParams) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionParams]
  );
