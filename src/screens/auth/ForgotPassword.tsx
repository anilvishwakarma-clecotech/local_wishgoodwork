import {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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
import {forgotPasswordScreenText} from '../../utils/Apptext';
import {LOGIN} from '../../utils/ScreenConstants';
import {useAppDispatch, useAppSelector} from '../../redux-data/hooks';
import {onLoginReset} from '../../redux-data/loginSlice';

const ForgotPassword = () => {
  interface navigateProp {
    navigate: Function;
  }
  const {loginFields, loginLinkData} = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();
  const navigation: navigateProp = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <View style={styles.headerContainer}>
              <CustomText
                text={forgotPasswordScreenText.head1}
                style={styles.heading1}
              />
              <CustomImage
                source={images.SADFACE}
                resizeMode="contain"
                style={styles.image}
              />
              <CustomText text={','} style={styles.commaText} />
            </View>
            <View>
              <CustomText
                text={forgotPasswordScreenText.head2}
                style={styles.heading2}
              />
              <View style={styles.descContainer}>
                <CustomText
                  text={forgotPasswordScreenText.descText}
                  style={styles.descTextSize}
                />
              </View>
            </View>
            <>
              <View style={styles.textInputContainer}>
                <CustomTextInput
                  placeholder={'Email'}
                  style={styles.textInput}
                  suffixIcon={false}
                  prefixIcon={false}
                  onSuffixIconPress={() => {}}
                  onPrefixIconPress={() => setShowPassword(!showPassword)}
                  showPassword={showPassword}
                  secureTextEntry={false}
                  showDropdown={false}
                  onChangeText={() => {}}
                  value={''}
                  showConfirmPassword={false}
                  prefixIconStyle={null}
                  suffixIconStyle={null}
                />
              </View>
            </>
            <View style={styles.buttonContainer}>
              <CustomButton
                text={'Send Reset Link'}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                onPress={() => {}}
              />
            </View>
            <View style={styles.descContainer}>
              <CustomText
                text={forgotPasswordScreenText.bottomdescText}
                style={styles.descTextSize}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(LOGIN);
                  dispatch(onLoginReset());
                }}>
                <CustomText
                  style={styles.linkText}
                  text={forgotPasswordScreenText.loginLinkText}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;

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
  heading1: {
    fontWeight: '700',
    fontSize: 18,
    color: COLORS.black,
  },
  image: {
    width: 20,
    height: 33,
  },
  commaText: {
    fontWeight: '700',
    fontSize: 27,
    position: 'absolute',
    left: w(18),
    bottom: 5,
    color: COLORS.black,
  },
  heading2: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: -15,
    color: COLORS.black,
  },
  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  descTextSize: {
    fontSize: 14,
  },
  linkText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: COLORS.darkblue,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 18,
  },
  textInputContainer: {
    marginTop: 20,
  },
  textInput: {
    borderColor: COLORS.gray,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16.5,
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
    marginTop: 5,
  },
});