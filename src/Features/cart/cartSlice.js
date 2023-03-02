import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: cartItems.length,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    increase: (state, { payload }) => {
      const Item = state.cartItems.find((item) => item.id === payload);
      Item.amount += 1;
    },
    decrease: (state, { payload }) => {
      const Item = state.cartItems.find((item) => item.id === payload);
      Item.amount -= 1;
    },
    remove: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount -= 1;
    },
    calTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
    },
  },
});

export const {
  clearCart, increase, decrease, calTotal, remove,
} = cartSlice.actions;
export default cartSlice.reducer;
