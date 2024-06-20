import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    
  },
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
