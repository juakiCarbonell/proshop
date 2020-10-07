import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productList } from "./reducers/products";
import { productDetails } from "./reducers/product";
import { cart } from "./reducers/cart";

const reducer = combineReducers({ productList, productDetails, cart });

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const middleware = [thunk];

const initalState = {
  cart: { cartItems: cartItemsFromStorage },
};

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
