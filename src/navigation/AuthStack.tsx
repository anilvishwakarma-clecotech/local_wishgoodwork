import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AuthStack;