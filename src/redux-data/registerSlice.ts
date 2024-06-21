import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {images} from '../utils/Iconasset';


interface FormField {
  label: string;
  flag: string;
  dropdownItem: string[] | null;
  secureTextEntry: boolean;
  keyBoardType: string;
  error: boolean;
  errorText: string;
  suffixIcon: boolean;
  prefixIcon: boolean | string;
  value: string;
}

interface RegisterState {
  formFields: FormField[];
}

const initialState: RegisterState = {
  formFields: [
    {
      label: 'Organization',
      flag: 'organization',
      dropdownItem: [
        'ClecoTech International',
        'Accenture',
        'Infosys',
        'Microsoft',
        'TCS',
      ],
      secureTextEntry: false,
      keyBoardType: 'default',
      error: false,
      errorText: 'Organization name is required',
      suffixIcon: false,
      prefixIcon: images.DROPDOWN,
      value: '',
    },
    {
      label: 'First Name',
      flag: 'firstName',
      dropdownItem: null,
      secureTextEntry: false,
      keyBoardType: 'default',
      error: false,
      errorText: 'First name is Required',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
    {
      label: 'Last Name',
      flag: 'lastName',
      dropdownItem: null,
      secureTextEntry: false,
      keyBoardType: 'default',
      error: false,
      errorText: 'Last name is required',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
    {
      label: 'Email',
      flag: 'email',
      dropdownItem: null,
      secureTextEntry: false,
      keyBoardType: 'email-address',
      error: false,
      errorText: 'please provide valid email address',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
    {
      label: 'Password',
      flag: 'password',
      dropdownItem: null,
      secureTextEntry: true,
      keyBoardType: 'default',
      error: false,
      errorText: 'Password must be greater than 8 characters',
      suffixIcon: false,
      prefixIcon: images.EYE,
      value: '',
    },
    {
      label: 'Confirm Password',
      flag: 'confirmPassword',
      dropdownItem: null,
      secureTextEntry: true,
      keyBoardType: 'default',
      error: false,
      errorText: 'Password not matched!',
      suffixIcon: false,
      prefixIcon: images.EYE,
      value: '',
    },
    {
      label: 'Employee id',
      flag: 'employeeId',
      dropdownItem: null,
      secureTextEntry: false,
      keyBoardType: 'default',
      error: false,
      errorText: 'please enter a valid employee id',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
    {
      label: 'Designation',
      flag: 'designation',
      dropdownItem: null,
      secureTextEntry: false,
      keyBoardType: 'default',
      error: false,
      errorText: 'please enter your designation',
      suffixIcon: false,
      prefixIcon: false,
      value: '',
    },
  ],
};

interface FormFieldPayload {
  flag: string;
  value: string;
  error: boolean;
}
interface FormFieldErrorPayload {
  flag: string;
  error: boolean;
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    onReset: () => initialState,
    onRegisterStateChange: (state, action: PayloadAction<FormFieldPayload>) => {
      const field = state.formFields.find(
        item => item.flag === action.payload.flag,
      );
      if (field) {
        field.value = action.payload.value;
        field.error = action.payload.error;
      }
    },
    onGetError: (state, action: PayloadAction<FormFieldErrorPayload>) => {
      const field = state.formFields.find(
        item => item.flag === action.payload.flag,
      );
      if (field) {
        field.error = action.payload.error;
      }
    },
  },
});
export const {onRegisterStateChange, onGetError, onReset} = registerSlice.actions;
export default registerSlice.reducer;
