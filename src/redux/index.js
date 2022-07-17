import {createStore, applyMiddleware} from "redux";

import ratesReducer from "./reducers/ratesReducer";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export const store = createStore(ratesReducer, composeWithDevTools(applyMiddleware(thunk)));

 store.subscribe(() => {
     console.log('store', store.getState())
 })

 