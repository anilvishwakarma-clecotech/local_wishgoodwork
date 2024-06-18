import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList
} from 'react-native';
import {CustomImage, CustomText, CustomTextInput} from '../../components';
import {images} from '../../utils/Iconasset';
import {COLORS, w} from '../../utils/index';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

interface InputDataItem {
  placeholder: string;
}

const inputData:InputDataItem[] = [
  {placeholder: 'Organization'},
  {placeholder: 'First Name'},
  {placeholder: 'Last Name'},
  {placeholder: 'Email'},
  {placeholder: 'Password'},
  {placeholder: 'Confirm Password'},
  {placeholder: 'Employee id'},
  {placeholder: 'Designation'},
];

const Register = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CustomTextInput placeholder={item.placeholder} style={styles.textInput} />
  );

  return (
    <ImageBackground style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {/* <FlatList data={''} renderItem={()=>{}} keyExtractor={(item,index)=>item?.id||index?.toString()}/> */}
          <ScrollView
            style={styles.inner}
            contentContainerStyle={{justifyContent: 'center'}}
            showsVerticalScrollIndicator={false}>
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
              <CustomText text={'Welcome!'} style={styles.welcomeText} />
              <View style={styles.registerContainer}>
                <CustomText
                  text={'Already registered with us?'}
                  style={styles.registerText}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={styles.registerLink}>
                  <Text style={styles.registerLinkText}>Login</Text>
                </TouchableOpacity>
              </View>
              <CustomText
                text={'Register yourself to WishGoodWork!'}
                style={styles.descriptionText}
              />
            </View>

            
              <FlatList
              data={inputData}
              renderItem={renderItem}
              keyExtractor={(item) => item.placeholder}
              contentContainerStyle={{ paddingBottom: 20 }}
            />


            <View style={styles.buttonContainer}>
              <CustomButton
                text={'Register'}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
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
  },
  headerContainer: {
    flexDirection: 'row',
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
    fontSize: 18,
    position: 'absolute',
    left: w(20),
    bottom: 5,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 18,
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
    right: 100,
    bottom: 2,
  },
  registerLinkText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  descriptionText: {
    fontSize: 14,
    marginVertical: 18,
  },
  textInput: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 4,
  },
  buttonContainer: {
    marginVertical: 12,
  },
  buttonStyle: {
    backgroundColor: '#082755',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   Keyboard,
//   FlatList
// } from 'react-native';
// import { CustomImage, CustomText, CustomTextInput } from '../../components';
// import { images } from '../../utils/Iconasset';
// import { COLORS, w } from '../../utils/index';
// import CustomButton from '../../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';
// // import { FlatList } from 'native-base';

// const inputData = [
//   { placeholder: 'Organization', key: 'organization' },
//   { placeholder: 'First Name', key: 'firstName' },
//   { placeholder: 'Last Name', key: 'lastName' },
//   { placeholder: 'Email', key: 'email' },
//   { placeholder: 'Password', key: 'password' },
//   { placeholder: 'Confirm Password', key: 'confirmPassword' },
//   { placeholder: 'Employee id', key: 'employeeId' },
//   { placeholder: 'Designation', key: 'designation' },
// ];

// const Register = () => {
//   const navigation = useNavigation();

//   const renderItem = ({ item }) => (
//     <CustomTextInput placeholder={item.placeholder} style={styles.textInput} />
//   );

//   return (
//     <ImageBackground style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.innerContainer}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//           <ScrollView
//             style={styles.inner}
//             contentContainerStyle={{ justifyContent: 'center' }}
//             showsVerticalScrollIndicator={false}>
//             <View style={styles.headerContainer}>
//               <CustomText text={'Hello'} style={styles.helloText} />
//               <CustomImage
//                 source={images.WAVE}
//                 resizeMode="contain"
//                 style={styles.waveImage}
//               />
//               <CustomText text={','} style={styles.commaText} />
//             </View>
//             <View>
//               <CustomText text={'Welcome!'} style={styles.welcomeText} />
//               <View style={styles.registerContainer}>
//                 <CustomText
//                   text={'Already registered with us?'}
//                   style={styles.registerText}
//                 />
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate('Login')}
//                   style={styles.registerLink}>
//                   <Text style={styles.registerLinkText}>Login</Text>
//                 </TouchableOpacity>
//               </View>
//               <CustomText
//                 text={'Register yourself to WishGoodWork!'}
//                 style={styles.descriptionText}
//               />
//             </View>
//             <FlatList
//               data={inputData}
//               renderItem={renderItem}
//               keyExtractor={(item) => item.key}
//               contentContainerStyle={{ paddingBottom: 20 }}
//             />
//             <View style={styles.buttonContainer}>
//               <CustomButton
//                 text={'Register'}
//                 buttonStyle={styles.buttonStyle}
//                 textStyle={styles.textStyle}
//               />
//             </View>
//           </ScrollView>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// };

// export default Register;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: COLORS.darkblue,
//   },
//   innerContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//     marginTop: 75,
//     borderTopLeftRadius: 42,
//     borderTopRightRadius: 42,
//     backgroundColor: COLORS.white,
//   },
//   inner: {
//     marginTop: 23,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   helloText: {
//     fontWeight: '700',
//     fontSize: 18,
//   },
//   waveImage: {
//     width: 33,
//     height: 33,
//   },
//   commaText: {
//     fontWeight: '700',
//     fontSize: 18,
//     position: 'absolute',
//     left: w(20),
//     bottom: 5,
//   },
//   welcomeText: {
//     fontWeight: '700',
//     fontSize: 18,
//   },
//   registerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 14,
//   },
//   registerText: {
//     fontSize: 14,
//   },
//   registerLink: {
//     position: 'absolute',
//     right: 100,
//     bottom: 2,
//   },
//   registerLinkText: {
//     textDecorationLine: 'underline',
//     color: 'blue',
//   },
//   descriptionText: {
//     fontSize: 14,
//     marginVertical: 18,
//   },
//   textInput: {
//     borderColor: 'gray',
//     width: '100%',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 5,
//     marginTop: 4,
//   },
//   buttonContainer: {
//     marginVertical: 12,
//   },
//   buttonStyle: {
//     backgroundColor: '#082755',
//     borderRadius: 10,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//   },
//   textStyle: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
// });

