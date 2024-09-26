import React from 'react';
import {ImageStyle, StyleProp, TextInput, TextStyle, TouchableOpacity, View} from 'react-native';
import CustomImage from './CustomImage';
import {images} from '../utils/Iconasset';

interface CustomTextProps {
  style: StyleProp<TextStyle>;
  placeholder: string;
  suffixIcon: any;
  prefixIcon: any;
  onPrefixIconPress: () => void;
  showPassword: boolean;
  showConfirmPassword:boolean;
  onSuffixIconPress: () => void;
  secureTextEntry: boolean;
  showDropdown: boolean;
  onChangeText: (text: string) => void;
  value: string;
  prefixIconStyle: StyleProp<ImageStyle>;
  suffixIconStyle: StyleProp<ImageStyle>;
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
    secureTextEntry,
    value,
    onChangeText,
    prefixIconStyle,
    suffixIconStyle,
    showConfirmPassword,
  } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {suffixIcon && (
        <TouchableOpacity
          onPress={onSuffixIconPress}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
          <CustomImage
            source={showPassword ? images.HIDDEN : images.EYE}
            resizeMode="contain"
            style={[suffixIconStyle, {width: 30, height: 30, right: 40}]}
          />
        </TouchableOpacity>
      )}
      <TextInput
        placeholder={placeholder}
        style={style}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {prefixIcon && (
        <TouchableOpacity
          onPress={onPrefixIconPress}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}>
          <CustomImage
            source={(placeholder === 'Password' && showPassword) 
              ? images.HIDDEN 
              : (placeholder === 'Confirm Password' && showConfirmPassword) 
                  ? images.HIDDEN 
                  : prefixIcon}
            resizeMode="contain"
            style={[prefixIconStyle, {width: 25, height: 25, right: 35}]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;