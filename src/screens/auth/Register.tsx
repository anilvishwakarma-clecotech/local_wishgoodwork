import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import {CustomImage, CustomText, CustomTextInput} from '../../components';
import {images} from '../../utils/Iconasset';
import {COLORS, w} from '../../utils/index';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../utils/ScreenConstants';
import {registerScreenText} from '../../utils/Apptext';
import {registerData} from '../../utils/MockData';

interface RenderItemProps {
  item: {
    label: string;
  };
}

const renderItem = ({item}: RenderItemProps) => (
  <CustomTextInput
    placeholder={item.label}
    style={styles.textInput}
    suffixIcon={false}
    prefixIcon={false}
    onPrefixIconPress={undefined}
    showPassword={false}
    onSuffixIconPress={undefined}
  />
);

const Register = () => {
  interface navigateProp {
    navigate: Function;
  }
  const navigation: navigateProp = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View
            style={styles.inner}
           >
            

            <FlatList
              data={registerData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index?.toString()}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={()=>{
                return(
                  <>
                  <View style={styles.headerContainer}>
              <CustomText
                text={registerScreenText.registerHead1}
                style={styles.helloText}
              />
              <CustomImage
                source={images.WAVE}
                resizeMode="contain"
                style={styles.waveImage}
              />
              <CustomText text={','} style={styles.commaText} />
            </View>
            <View>
              <CustomText
                text={registerScreenText.registerHead2}
                style={styles.welcomeText}
              />
              <View style={styles.registerContainer}>
                <CustomText
                  text={registerScreenText.registerDesc1}
                  style={styles.registerText}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate(LOGIN)}
                  style={styles.registerLink}>
                  <CustomText
                    style={styles.registerLinkText}
                    text={registerScreenText.linkLogin}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                text={registerScreenText.registerDescText2}
                style={styles.descriptionText}
              />
            </View>
                  </>
                )
              }}
              ListFooterComponent={()=>{
                return(
                  <View style={styles.buttonContainer}>
                  <CustomButton
                    text={'Register'}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                  />
                </View>
                )
              }}
              contentContainerStyle={{paddingBottom: 20}}

            />

         
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.darkblue,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 75,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    backgroundColor: COLORS.white,
  },
  inner: {
    marginTop: 23,
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helloText: {
    fontWeight: '700',
    fontSize: 18,
    color: COLORS.black,
  },
  waveImage: {
    width: 33,
    height: 33,
  },
  commaText: {
    fontWeight: '700',
    fontSize: 18,
    position: 'absolute',
    left: w(20),
    bottom: 5,
    color: COLORS.black,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 18,
    color: COLORS.black,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    position: 'absolute',
    right: 116,
    bottom: 2,
  },
  registerLinkText: {
    textDecorationLine: 'underline',
    color: COLORS.darkblue,
  },
  descriptionText: {
    fontSize: 14,
    marginVertical: 18,
  },
  textInput: {
    borderColor: COLORS.gray,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginTop: 6,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.darkblue,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  textStyle: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
