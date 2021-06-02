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
