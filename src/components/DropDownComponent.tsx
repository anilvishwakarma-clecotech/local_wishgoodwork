import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CustomImage from './CustomImage';
import {images} from '../utils/Iconasset';
import CustomText from './CustomText';

const DropDownComponent = (props: {
  onPress: any;
  data: any;
  showDropDown: boolean;
  dropDownText:string;
  onchangeText:any
}) => {
  const {onPress, data, showDropDown,dropDownText,onchangeText} = props;

  return (
    <>
      <TouchableOpacity onPress={onPress}
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 4,
        }}>
        <CustomText style={{}} text={dropDownText} />
          <CustomImage
            source={images.DROPDOWN}
            resizeMode="contain"
            style={{width: 24, height: 24}}
          />
      </TouchableOpacity>
      {showDropDown && (
        <View
          style={{
            borderWidth: 1,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}>
          {data.map((entry: string, index: number) => (
            <TouchableOpacity
              style={{margin: 10}}
              key={index}
              onPress={() => {
                onchangeText(entry)
              }}>
              <CustomText text={entry} style={{fontSize: 15}} />
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  marginTop: 2,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

export default DropDownComponent;
