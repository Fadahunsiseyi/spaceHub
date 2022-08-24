import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'GET_ROCKETS';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
