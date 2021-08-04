import { CartActionType } from './cartType';

export const toggleCartHidden = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};

export const addItems = (item) => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};

export const removeItems = (item) => {
  return {
    type: CartActionType.REMOVE_ITEM,
    payload: item,
  };
};

export const clearItem = (item) => {
  return {
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
