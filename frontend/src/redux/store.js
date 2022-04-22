import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './room/roomSlice';
import singleRoomReducer from './room/singleRoomSlice';
export const store = configureStore({
  reducer: {
    listRooms: roomReducer,
    roomInfo: singleRoomReducer,
  },
});
