import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './root-reducer'


let middleware = applyMiddleware(promise, thunk);

export const store = createStore(rootReducer, middleware)
