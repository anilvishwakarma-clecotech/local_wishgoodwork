import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {
  CustomImage,
  CustomText,
  CustomTextInput,
  CustomButton,
} from '../../components';
import {images} from '../../utils/Iconasset';
import {w, COLORS} from '../../utils/index';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <View style={styles.headerContainer}>
              <CustomText text={'Hello'} style={styles.helloText} />
              <CustomImage
                source={images.WAVE}
                resizeMode="contain"
                style={styles.waveImage}
              />
              <CustomText text={','} style={styles.commaText} />
            </View>
            <View>
              <CustomText text={'Welcome Back!'} style={styles.welcomeText} />
              <View style={styles.registerContainer}>
                <CustomText
                  text={'Not registered with us?'}
                  style={styles.registerText}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                  style={styles.registerLink}>
                  <Text style={styles.registerLinkText}>Register now!</Text>
                </TouchableOpacity>
              </View>
              <CustomText
                text={
                  'Stay connected with us by logging in using your credentials.'
                }
                style={styles.descriptionText}
              />
            </View>
            <CustomTextInput placeholder={'Email'} style={styles.textInput} />
            <CustomTextInput
              placeholder={'Password'}
              style={styles.textInput}
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                text={'Login'}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity>
          <Text style={styles.bottomLinks}> &gt; Forgot Yor Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{...styles.bottomLinks, marginTop: 10}}>
            {' '}
            &gt; Need assistance confirming your account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{...styles.bottomLinks, marginTop: 10}}>
            {' '}
            &gt; Need assistance unlocking your account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;

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
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  helloText: {
    fontWeight: '700',
    fontSize: 18,
  },
  waveImage: {
    width: 33,
    height: 33,
  },
  commaText: {
    fontWeight: '700',
    fontSize: 27,
    position: 'absolute',
    left: w(19),
    bottom: 5,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: -15,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    position: 'absolute',
    right: 90,
    bottom: 2,
  },
  registerLinkText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: COLORS.darkblue,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 18,
  },
  textInput: {
    borderColor: COLORS.gray,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16.5,
    paddingVertical: 12,
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 30,
  },
  buttonStyle: {
    backgroundColor: COLORS.darkblue,
    borderRadius: 5,
    paddingVertical: 12,
  },
  textStyle: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  bottomLinks: {
    fontSize: 14,
    color: COLORS.darkblue,
  },
});
