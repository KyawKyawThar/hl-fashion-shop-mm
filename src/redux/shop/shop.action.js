import { shopActionType } from "./shop.type"

export const updateCollections = collectionsMap => {
    return {
        type: shopActionType.UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}