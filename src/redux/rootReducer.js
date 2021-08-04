import { persistReducer } from 'redux-persist';

import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import userReducer from './user/userReducer';

import storage from 'redux-persist/lib/storage';
import {directoryReducer} from "./directory/directory.reducer";
import {shopReducer} from "./shop/shopReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});

export default persistReducer(persistConfig, rootReducer);
