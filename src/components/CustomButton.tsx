import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle,Text} from 'react-native';

interface CustomButtonProps {
  text: string;
  textStyle: TextStyle;
  buttonStyle: ViewStyle;
}

const CustomButton = (props: CustomButtonProps) => {
  const {text, textStyle, buttonStyle} = props;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
