import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetails,
  productList,
  productDelete,
  productCreate,
  productUpdate,
  productReviewCreate,
  productTopRated,
} from './reducers/product';
import {
  userLogin,
  userRegister,
  userDetails,
  userUpdateProfile,
  userList,
  userDelete,
  userUpdate,
} from './reducers/user';
import {
  orderCreate,
  orderDetails,
  orderPay,
  orderDeliver,
  orderListMy,
  orderList,
} from './reducers/order';
import { cart } from './reducers/cart';

const reducer = combineReducers({
  productList,
  productDetails,
  productDelete,
  productCreate,
  productReviewCreate,
  cart,
  userLogin,
  userRegister,
  userDetails,
  userUpdateProfile,
  orderCreate,
  orderDetails,
  orderList,
  orderPay,
  orderDeliver,
  orderListMy,
  userList,
  userDelete,
  userUpdate,
  productUpdate,
  productTopRated,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const middleware = [thunk];

const initalState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
