import React from 'react';
import {TextInput, TextStyle, TouchableOpacity, View} from 'react-native';
import CustomImage from './CustomImage';
import {images} from '../utils/Iconasset';

interface CustomTextProps {
  style: TextStyle;
  placeholder: string;
  suffixIcon: any;
  prefixIcon: any;
  onPrefixIconPress: any;
  showPassword: boolean;
  onSuffixIconPress: any;
  secureTextEntry: boolean;
  showDropdown: boolean;
  onChangeText: any;
  value: string;
  prefixIconStyle: any;
  suffixIconStyle: any;
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
  } = props;

  // console.log(showPassword,'showPasswordshowPasswordshowPassword');

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
            source={prefixIcon}
            resizeMode="contain"
            style={[prefixIconStyle, {width: 25, height: 25, right: 35}]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

// import React from 'react';
// import {
//   TextInput,
//   TextStyle,
//   TouchableOpacity,
//   View,
//   StyleProp,
//   TextInputProps,
//   ViewStyle,
//   ImageStyle
// } from 'react-native';
// import CustomImage from './CustomImage';
// import { images } from '../utils/Iconasset';

// interface CustomTextProps {
//   style: StyleProp<TextStyle>;
//   placeholder: string;
//   suffixIcon: any;
//   prefixIcon: any;
//   onPrefixIconPress: () => void;
//   showPassword: boolean;
//   onSuffixIconPress: () => void;
//   secureTextEntry: boolean;
//   showDropdown: boolean;
//   onChangeText: (text: string) => void;
//   value: string;
//   prefixIconStyle: StyleProp<ImageStyle>;
//   suffixIconStyle: StyleProp<ImageStyle>;
// }

// const CustomTextInput= (props:CustomTextProps) => {
//   const {
//     style,
//     placeholder,
//     suffixIcon,
//     prefixIcon,
//     onPrefixIconPress,
//     onSuffixIconPress,
//     showPassword,
//     secureTextEntry,
//     value,
//     onChangeText,
//     prefixIconStyle,
//     suffixIconStyle,
//   } = props;

//   return (
//     <View style={styles.container}>
//       {suffixIcon && (
//         <TouchableOpacity onPress={onSuffixIconPress}>
//           <CustomImage
//             source={showPassword ? images.HIDDEN : images.EYE}
//             resizeMode="contain"
//             style={[styles.icon, suffixIconStyle]}
//           />
//         </TouchableOpacity>
//       )}
//       <TextInput
//         placeholder={placeholder}
//         style={[styles.input, style]}
//         secureTextEntry={secureTextEntry}
//         value={value}
//         onChangeText={onChangeText}
//       />
//       {prefixIcon && (
//         <TouchableOpacity onPress={onPrefixIconPress}>
//           <CustomImage
//             source={prefixIcon}
//             resizeMode="contain"
//             style={[styles.icon, prefixIconStyle]}
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   } as ViewStyle,
//   input: {
//     flex: 1,
//   } as TextStyle,
//   icon: {
//     width: 25,
//     height: 25,
//     marginRight: 10,
//   } as ImageStyle,
// };

// export default CustomTextInput;
