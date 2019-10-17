import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// selectCollections gets only the part of the state interested in
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// converts Object into Array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// associates the 'shop.collections.1' with a name
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    // collections.find(
    //   collection => collection.id === COLLECTION_ID_MAPS[collectionUrlParam]
    // )
  );
