import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/product";

const initialState = {
  loading: false,
  product: { reviews: [] },
  error: null,
};

export const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload, error: null };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
