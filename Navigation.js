import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/Onboarding';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const Navigation = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Onboarding">
      <Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
      <Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;