import { configureStore } from '@reduxjs/toolkit';
import Carreducer from './Carsslice'; 

const carstore = configureStore({
  reducer: {
    Car: Carreducer,
  },
});

export default carstore;
