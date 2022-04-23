import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './room/roomSearchSlice';
import roomReducer from './room/roomSlice';
import singleRoomReducer from './room/singleRoomSlice';
export const store = configureStore({
  reducer: {
    listRooms: roomReducer,
    roomInfo: singleRoomReducer,
    search: searchReducer,
  },
});
