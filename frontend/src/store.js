import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productList } from "./reducers/products";
import { productDetails } from "./reducers/product";

const reducer = combineReducers({ productList, productDetails });

const middleware = [thunk];

const initalState = {};

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
