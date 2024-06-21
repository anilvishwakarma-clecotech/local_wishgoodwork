import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import CustomImage from './CustomImage';
import { images } from '../utils/Iconasset';
import CustomText from './CustomText';

const DropDownComponent = (props: {
  onPress: ()=> void;
  data: string[];
  showDropDown: boolean;
  dropDownText: string;
  onchangeText: (text:string)=> void;
  prefixIconStyle:any
}) => {
  const { onPress, data, showDropDown, dropDownText, onchangeText, prefixIconStyle } = props;

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <CustomText style={styles.customText} text={dropDownText} />
        <CustomImage
          source={images.DROPDOWN}
          resizeMode="contain"
          style={[prefixIconStyle,styles.image]}
        />
      </TouchableOpacity>
      {showDropDown && (
        <View style={styles.dropdown}>
          {data.map((entry: string, index: number) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              key={index}
              onPress={() => {
                onchangeText(entry);
              }}
            >
              <CustomText text={entry} style={styles.dropdownItemText} />
              <View style={styles.dropdownItemSeparator} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  },
  customText: {
  },
  image: {
    width: 24,
    height: 24,
  },
  dropdown: {
    borderWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  dropdownItem: {
    margin: 10,
  },
  dropdownItemText: {
    fontSize: 15,
  },
  dropdownItemSeparator: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: 2,
  },
});

export default DropDownComponent;
