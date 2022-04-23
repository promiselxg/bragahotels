import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import roomService from './roomService';

const searchData = JSON.parse(localStorage.getItem('search'));
const initialState = {
  result: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  checkIn: '',
  checkOut: '',
};

// get single rooms
export const searchRooms = createAsyncThunk(
  'rooms/search',
  async (data, thunkAPI) => {
    try {
      return await roomService.searchRoom(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const roomSearch = createSlice({
  name: 'search',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: {
    [searchRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [searchRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.result = action.payload;
      state.checkIn = searchData.checkIn;
      state.checkOut = searchData.checkOut;
    },
    [searchRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.result = null;
    },
  },
});
export const { reset } = roomSearch.actions;
export default roomSearch.reducer;
