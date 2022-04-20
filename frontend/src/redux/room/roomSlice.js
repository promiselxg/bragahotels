import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import roomService from './roomService';

// Get rooms from localstorage
const rooms = JSON.parse(localStorage.getItem('rooms'));
const initialState = {
  rooms: rooms ? rooms : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get all rooms
export const getRooms = createAsyncThunk('rooms/listRoom', async (thunkAPI) => {
  try {
    return await roomService.getAllRooms();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms = action.payload;
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.rooms = null;
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
