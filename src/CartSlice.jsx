import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a new plant to the cart, or increase its quantity if it is already there.
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    // Remove a plant completely from the cart by its product id.
    removeItem(state, action) {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    // Set a quantity, never allowing it to fall below one.
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((entry) => entry.id === id);
      if (item) {
        item.quantity = Math.max(1, Number(quantity) || 1);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
