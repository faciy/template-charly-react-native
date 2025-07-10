import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { TRootState } from '../../index';

// Type definitions for better type safety

export interface IUserState {
  token: string;
  connected: boolean;
}

const initialState: IUserState = {
  token: '',
  connected: false,
};

// create slice for user
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  },
});

export default userSlice.reducer;

// create selector for user
export const userSelector = (state: TRootState) => state.user;
export const selectToken = createSelector([userSelector], user => user.token);
export const selectConnected = createSelector([userSelector], user => user.connected);

// create action
export const { setToken, setConnected } = userSlice.actions;
