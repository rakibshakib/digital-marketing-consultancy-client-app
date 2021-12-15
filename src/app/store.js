import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../features/Slice/slice';

export const store = configureStore({
  reducer: {
    services: serviceReducer,
  },
});
