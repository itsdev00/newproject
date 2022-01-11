import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useEffect} from 'react';

import LoginScreen from './app/src/screens/authentication/LoginScreen';
import SignUpScreen from './app/src/screens/authentication/SignUpScreen';
import ForgotPasswordScreen from './app/src/screens/authentication/ForgotPasswordScreen';
import HomeScreen from './app/src/screens/authentication/HomeScreen';
import CartScreen from './app/src/screens/authentication/CartScreen';
import SplashScreen from 'react-native-splash-screen';
import PlaceOrderScreen from './app/src/screens/authentication/PlaceOrderScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Login'}>
        <Stack.Screen name="SignUP" component={SignUpScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

