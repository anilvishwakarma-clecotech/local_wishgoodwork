import React from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import CustomImage from './CustomImage';
import {images} from '../utils/Iconasset';

interface CustomTextProps {
  style: TextStyle;
  placeholder: string;
  suffixIcon: boolean;
  prefixIcon: boolean;
  onPrefixIconPress: any;
  showPassword: boolean;
  onSuffixIconPress: any;
}

const CustomTextInput = (props: CustomTextProps) => {
  const {
    style,
    placeholder,
    suffixIcon,
    prefixIcon,
    onPrefixIconPress,
    onSuffixIconPress,
    showPassword,
  } = props;

  // console.log(showPassword,'showPasswordshowPasswordshowPassword');

  return (
    <>
      {suffixIcon && (
        <TouchableOpacity onPress={onSuffixIconPress}>
          <CustomImage
            source={showPassword ? images.HIDDEN : images.EYE}
            resizeMode="contain"
            style={{width: 30, height: 30, right: 40}}
          />
        </TouchableOpacity>
      )}
      <TextInput placeholder={placeholder} style={style} />
      {prefixIcon && (
        <TouchableOpacity onPress={onPrefixIconPress}>
          <CustomImage
            source={showPassword ? images.HIDDEN : images.EYE}
            resizeMode="contain"
            style={{width: 30, height: 30, right: 40}}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomTextInput;
