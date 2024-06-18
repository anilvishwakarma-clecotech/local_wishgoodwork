import React from 'react';
import { Text, TextInput, TextStyle, ViewStyle } from 'react-native';

interface CustomTextProps {
  style: TextStyle, 
  placeholder: string; 
}

const CustomTextInput = (props:CustomTextProps) => {
  const {style, placeholder} = props;
  return (
    <TextInput placeholder={placeholder} style={style}/>
  );
};

export default CustomTextInput;
