import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login,Register } from '../screens';
import ForgotPassword from '../screens/auth/ForgotPassword';
import UnlockAccount from '../screens/auth/UnlockAccount';
import ConfirmAccount from '../screens/auth/ConfirmAccount';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
        <Stack.Screen name='UnlockAccount' component={UnlockAccount}/>
        <Stack.Screen name='ConfirmAccount' component={ConfirmAccount}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AuthStack;