import { createSlice } from "@reduxjs/toolkit";

const initialState={
  count:0,
  data:[]
};

const counterSlice=createSlice({ 
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      state.count +=1;
    },
    decrement:(state)=>{
      state.count -=1;
    },
    addcart:(state,action)=>{
      

    }
  }
})
export const {increment,decrement,addcart}=counterSlice.actions;
export default counterSlice.reducer;