import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/loginScreen";
import SignupScreen from "../screens/SignUpScreen/signUpScreen";
import HomeScreen from "../screens/HomeScreen/homeScreen";

export type PublicStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home:undefined;
};

const Stack = createNativeStackNavigator<PublicStackParamList>();

export default function PublicStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
