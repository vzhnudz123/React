import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"; // Import updated reducer


const storee = configureStore({
  reducer: {
    cart: cartReducer, // Store cart data here
  }
});

export default storee;
