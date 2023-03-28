import { configureStore } from '@reduxjs/toolkit';
import items from './itemsSlice';
import cart from './cartSlice'


export const store = configureStore({
  reducer: {
  items,
  cart
  },
})