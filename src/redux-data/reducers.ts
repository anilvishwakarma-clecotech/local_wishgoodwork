import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginSlice'; 
import registerReducer from './registerSlice'; 

const rootReducer = combineReducers({
  login: loginReducer, 
  register: registerReducer, 
});

export default rootReducer;
