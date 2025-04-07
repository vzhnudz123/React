import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart (empty array)
const initialState = {
  cart: [], // Cart array will contain items with quantity
};

const Cartslice = createSlice({
  name: 'cart', // Slice name used to identify this slice of state
  initialState, // The initial state
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.name === action.payload.name);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1; // If item already exists, increment quantity
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    
    // Action to remove an item from the cart by name
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.name !== action.payload.name);
    },
    
    // Action to increase the count (per item)
    incre: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.name === action.payload.name);
      if (itemIndex >= 0) {//-1 anel cart il ella so 0
        state.cart[itemIndex].quantity += 1; // Increment quantity by 1 for the item
      }
    },
    
    // Action to decrease the count (per item)
    decre: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.name === action.payload.name);
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1; // Decrement quantity by 1 for the item (but don't go below 1)
      }
    },
  }
});

// Export actions (addToCart, removeFromCart, incre, decre)
export const { addToCart, removeFromCart, incre, decre } = Cartslice.actions;

// Export reducer for the cart slice
export default Cartslice.reducer;
