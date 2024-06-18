import React from 'react';
import { Image, ImageProps, StyleProp, ImageStyle } from 'react-native';

interface CustomImageProps {
  source: ImageProps['source'];
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const CustomImage:React.FC<CustomImageProps> = ({source, style, resizeMode}) => {
  return (
    <Image alt="image" source={source} style={style} resizeMode={resizeMode} />
  );
};

export default CustomImage;
