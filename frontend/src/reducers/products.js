import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "../constants/product";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productList = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload, error: "" };
    case PRODUCT_LIST_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
