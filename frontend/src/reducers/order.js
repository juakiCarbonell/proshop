import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/order';

export const orderCreate = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: true, success: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
