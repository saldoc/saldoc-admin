import { ProductsTypes } from "./products.types";

const initialState = {
  products: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductsTypes.GET_PRODUCTS_PENDING:
    case ProductsTypes.DELETE_PRODUCT_PENDING:
    case ProductsTypes.ADD_PRODUCT_PENDING:
    case ProductsTypes.UPDATE_PRODUCT_PENDING:
      return { ...state, fetching: true, fetched: false, error: null };

    case ProductsTypes.GET_PRODUCTS_REJECTED:
    case ProductsTypes.ADD_PRODUCT_REJECTED:
    case ProductsTypes.UPDATE_PRODUCT_REJECTED:
    case ProductsTypes.DELETE_PRODUCT_REJECTED:
      return { ...state, fetching: false, fetched: false, error: action.payload };

    case ProductsTypes.GET_PRODUCTS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        products: [...action.payload.data]
      };

    case ProductsTypes.ADD_PRODUCT_FULFILLED:
      const nextProducts = [...state.products, action.payload.data];
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        products: nextProducts
      };

    case ProductsTypes.UPDATE_PRODUCT_FULFILLED:
      const productsClone = [...state.products];
      const index = productsClone.findIndex(el => el.id === action.payload.data.id);
      productsClone[index] = action.payload.data;
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        products: productsClone
      };


    case ProductsTypes.DELETE_PRODUCT_FULFILLED:
      const products = [...state.products];
      const filtered = products.filter(el => el.id !== action.payload.data.id);
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        products: [...filtered]
      };
    default:
      return state
  }
}