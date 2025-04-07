import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: [],
  selectedCar: null, // For the car that is selected to view details
};



const Carslice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addtofav: (state, action) => {
      const isCarInFav = state.car.some(car => car.id === action.payload.id);
      if (!isCarInFav) {
        state.car.push(action.payload); 
      }
    }, 
    removefav: (state, action) => {
      state.car = state.car.filter(car => car.id !== action.payload.id);
    },
    setSelectedCar: (state, action) => {  // Set selected car for details view
      state.selectedCar = action.payload;
    }
  },
});

export const { addtofav, removefav,setSelectedCar } = Carslice.actions;

export default Carslice.reducer;
