import {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ListRenderItemInfo,
  Alert,
} from 'react-native';
import {
  CustomImage,
  CustomText,
  CustomTextInput,
  DropDownComponent,
} from '../../components';
import {images} from '../../utils/Iconasset';
import {COLORS, w} from '../../utils/index';
import CustomButton from '../../components/CustomButton';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {LOGIN} from '../../utils/ScreenConstants';
import {registerScreenText} from '../../utils/Apptext';
import {useAppDispatch, useAppSelector} from '../../redux-data/hooks';
import {
  onGetError,
  onRegisterStateChange,
  onReset,
} from '../../redux-data/registerSlice';
import {emailValidation} from '../../utils/Validations';

interface FormField {
  error: any;
  errorText: string;
  label: string;
  flag: string;
  prefixIcon: boolean | string;
  secureTextEntry: boolean;
  dropdownItem: string[] | any;
  value: string;
}

const Register = () => {
  const {formFields} = useAppSelector(state => state.register);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPassword, setShowPassword] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const [dropDownText, setDropDownText] = useState(
    'Please select organisation from list',
  );
  const onRegister = (formFields: any) => {
    let verified = true;
    formFields.forEach((ele: any) => {
      if (ele.flag === 'organization' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'firstName' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'lastName' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'email' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'password' && ele.value.length < 8) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'confirmPassword' && ele.value.length < 8) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'employeeId' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      } else if (ele.flag == 'designation' && ele.value.length == 0) {
        dispatch(
          onGetError({
            flag: ele.flag,
            error: true,
          }),
        );
      }
    });
  };

  const renderItem = ({item}: ListRenderItemInfo<FormField>) => {

    return (
      <>
        {item.flag === 'organization' ? (
          <DropDownComponent
            data={item?.dropdownItem}
            showDropDown={showDropDown}
            dropDownText={dropDownText}
            onchangeText={(val: string) => {
              setDropDownText(val);
              setShowDropdown(!showDropDown);
            }}
            onPress={() => {
              setShowDropdown(!showDropDown);
            }}
          />
        ) : (
          <CustomTextInput
            placeholder={item.label}
            secureTextEntry={item.secureTextEntry}
            onChangeText={val =>
              dispatch(
                onRegisterStateChange({
                  flag: item.flag,
                  value: val,
                  error: false,
                }),
              )
            }
            value={item.value}
            style={styles.textInput}
            suffixIcon={false}
            prefixIconStyle={{
              transform: [{rotate: showDropDown ? '180deg' : '0deg'}],
            }}
            suffixIconStyle={null}
            prefixIcon={item.prefixIcon}
            onSuffixIconPress={() => {}}
            onPrefixIconPress={() =>
              item.flag === 'organization'
                ? setShowDropdown(!showDropDown)
                : setShowPassword(!showPassword)
            }
            showPassword={showPassword}
            showDropdown={showDropDown}
          />
        )}

        {item?.error && (
          <CustomText text={item?.errorText} style={{color: 'red'}} />
        )}
      </>
    );
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inner}>
            <FlatList
              data={formFields}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => (
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
              )}
              ListFooterComponent={() => (
                <View style={styles.buttonContainer}>
                  <CustomButton
                    text={'Register'}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={() => onRegister(formFields)}
                  />
                </View>
              )}
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
    justifyContent: 'center',
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
    left: w(19),
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
    right: 117,
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
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    borderColor: COLORS.gray,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginVertical: 5,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.darkblue,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  textStyle: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
