import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle,Text} from 'react-native';

interface CustomButtonProps {
  text: string;
  textStyle: TextStyle;
  buttonStyle: ViewStyle;
  onPress:any
}

const CustomButton = (props: CustomButtonProps) => {
  const {text, textStyle, buttonStyle,onPress} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
