import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignUpScreen/signUpScreen';
import PublicStackNavigator from './PublicStackNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  useEffect(() => {
    console.log('✅ App component mounted');
  }, []);

  return (
    <NavigationContainer>
      <PublicStackNavigator />
    </NavigationContainer>
  );
}
