import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/cart/cartSlice';
import modalReducer from './Features/modal/modalSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
}); 
export default store;