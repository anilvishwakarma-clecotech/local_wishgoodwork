import React from 'react';
import { Text, TextStyle } from 'react-native';

interface CustomTextProps {
  style: TextStyle; 
  text: string; 
}

const CustomText = (props:CustomTextProps) => {
  const {style, text} = props;
  return (
    <Text style={style}>{text}</Text>
  );
};

export default CustomText;