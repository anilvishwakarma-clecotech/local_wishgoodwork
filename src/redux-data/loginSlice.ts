import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { images } from '../utils/Iconasset';

interface LoginFields {
  label: string;
  flag: string;
  secureTextEntry: boolean;
  keyBoardType: string;
  error: boolean;
  errorText: string;
  suffixIcon: boolean;
  prefixIcon: boolean | string;
  value: string;
}

interface LoginState {
  loginFields: LoginFields[];
  loginLinkData: { text: string, link:string}[];
}

const initialState: LoginState = {
  loginFields: [
    {
      label: 'Email',
      flag: 'email',
      secureTextEntry: false,
      keyBoardType: 'email-address',
      error: false,
      errorText: 'Please provide valid email address',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
    {
      label: 'Password',
      flag: 'password',
      secureTextEntry: true,
      keyBoardType: 'default',
      error: false,
      errorText: 'incorrect credentials!',
      suffixIcon: false,
      prefixIcon: images.EYE,
      value: '',
    },
  ],
  loginLinkData: [
    {
      text: '> Forgot Your Password?',
      link: 'ForgotPassword'
    },
    {
      text: '> Need assistance confirming your account?',
      link: 'ForgotPassword'
    },
    {
      text: '> Need assistance unlocking your account?',
      link: 'ForgotPassword'
    },
  ],
};

interface LoginFieldPayload {
  flag: string;
  value: string;
  error: boolean;
}

interface LoginFieldErrorPayload {
  flag: string;
  error: boolean;
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    onLoginReset: () => initialState,
    onLoginStateChange: (state, action: PayloadAction<LoginFieldPayload>) => {
      const field = state.loginFields.find(
        item => item.flag === action.payload.flag,
      );
      if (field) {
        field.value = action.payload.value;
        field.error = action.payload.error;
      }
      return state;
    },
    onGetError: (state, action: PayloadAction<LoginFieldErrorPayload>) => {
      console.log(action.payload);
      const field = state.loginFields.find(
        item => item.flag === action.payload.flag,
      );
      if (field) {
        field.error = action.payload.error;
      }
      return state;
    },
  },
});

export const { onLoginStateChange, onLoginReset, onGetError } = loginSlice.actions;
export default loginSlice.reducer;
