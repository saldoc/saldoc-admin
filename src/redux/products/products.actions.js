import { ProductsTypes } from "./products.types";
import axios from 'axios';

export function getProducts() {
  return {
    type: ProductsTypes.GET_PRODUCTS,
    payload: axios.get(`http://localhost:3004/products`, {})
  }
}

export function addProduct(product) {
  return {
    type: ProductsTypes.ADD_PRODUCT,
    payload: axios.post(`http://localhost:3004/products`, product, {})
  }
}

export function updateProduct(product) {
  return {
    type: ProductsTypes.UPDATE_PRODUCT,
    payload: axios.put(`http://localhost:3004/products/${product.id}`, product, {})
  }
}

export function deleteProduct(dispatch, id) {
  dispatch({ type: ProductsTypes.DELETE_PRODUCT_PENDING, payload: { data: { id: id } } })
  dispatch({ type: 'TEMP', payload: axios.delete(`http://localhost:3004/products/${id}`) })
    .then(response => {
      dispatch({ type: ProductsTypes.DELETE_PRODUCT_FULFILLED, payload: { data: { id: id } } })
    })
    .catch(err => {
      dispatch({ type: ProductsTypes.DELETE_PRODUCT_REJECTED, payload: err })
    });
}
