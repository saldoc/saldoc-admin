import { combineReducers } from 'redux'
import UserReducer from './user/user.reducer'
import ProductsReducer from './products/products.reducer'


export default combineReducers({
  UserReducer,
  ProductsReducer
})