import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Get the plant details from the action payload
      const { name, image, cost } = action.payload;
      
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If item exists, increase its quantity by 1
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({ 
          name, 
          image, 
          cost, 
          quantity: 1 
        });
      }
    },
    
    removeItem: (state, action) => {
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    updateQuantity: (state, action) => {
      // Get the item name and new quantity from the action payload
      const { name, quantity } = action.payload;
      
      // Find the item in the cart
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        // Update the item's quantity
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
