// store.js
import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from '../actions/cartActions';



export const store = configureStore ({
    reducer:{
        cart:addToCartReducer
    }
})

export default store;
