import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './room/roomSlice';
export const store = configureStore({
  reducer: {
    listRooms: roomReducer,
  },
});
