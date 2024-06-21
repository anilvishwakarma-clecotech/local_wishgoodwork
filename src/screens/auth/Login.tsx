import {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
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
import {loginScreenText} from '../../utils/Apptext';
import {REGISTER} from '../../utils/ScreenConstants';
import {useAppDispatch, useAppSelector} from '../../redux-data/hooks';
import {
  onLoginStateChange,
  onReset,
  onGetError,
} from '../../redux-data/loginSlice';
import {emailValidation} from '../../utils/Validations';

const Login = () => {
  interface navigateProp {
    navigate: Function;
  }
  const {loginFields,loginLinkData} = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();
  const navigation: navigateProp = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = (loginFields: any) => {
    let verified = true;
    loginFields.forEach((ele: any) => {
      // console.log(ele.value, 'loginFields');

      if (ele.flag == 'email' && !emailValidation(ele.value)) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
        verified = false;
      } else if (ele.flag == 'password' && ele.value.length < 8) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
        verified = false;
      }
    });

    if (verified) {
      Alert.alert('ready for login');
      dispatch(onReset());
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <View style={styles.headerContainer}>
              <CustomText
                text={loginScreenText.loginHead1}
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
                text={loginScreenText.loginHead2}
                style={styles.welcomeText}
              />
              <View style={styles.registerContainer}>
                <CustomText
                  text={loginScreenText.loginDesc1}
                  style={styles.registerText}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate(REGISTER)}
                  style={styles.registerLink}>
                  <CustomText
                    style={styles.registerLinkText}
                    text={loginScreenText.linkRegister}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                text={loginScreenText.loginDescText2}
                style={styles.descriptionText}
              />
            </View>
            {loginFields.map((inputData, index) => (
              <>
                <View key={index.toString()} style={styles.textInputContainer}>
                  <CustomTextInput
                    placeholder={inputData.label}
                    style={styles.textInput}
                    suffixIcon={inputData.suffixIcon}
                    prefixIcon={inputData.prefixIcon}
                    onSuffixIconPress={() => {}}
                    onPrefixIconPress={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    secureTextEntry={
                      inputData.flag === 'password' && !showPassword
                    }
                    showDropdown={false}
                    onChangeText={(val: string) => {
                      dispatch(
                        onLoginStateChange({
                          flag: inputData.flag,
                          value: val,
                          error: false,
                        }),
                      );
                    }}
                    value={inputData.value}
                    showConfirmPassword={false}
                    prefixIconStyle={null}
                    suffixIconStyle={null}
                  />
                </View>
                {inputData?.error && (
                  <CustomText
                    text={inputData?.errorText}
                    style={{color: 'red'}}
                  />
                )}
              </>
            ))}
            <View style={styles.buttonContainer}>
              <CustomButton
                text={'Login'}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                onPress={() => onLogin(loginFields)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{marginTop: 20}}>
          {loginLinkData.map((item, index) => (
            <TouchableOpacity key={index.toString()}>
              <CustomText style={styles.bottomLinks} text={item.text} />
            </TouchableOpacity>
          ))}
        </View>
      </KeyboardAvoidingView>
    </View>
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
    color: COLORS.black,
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
    color: COLORS.black,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: -15,
    color: COLORS.black,
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
    right: 83,
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
    marginTop: 35,
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
