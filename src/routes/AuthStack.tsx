import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { LoginScreen, OnboardingScreen } from '~/screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  OnboardingScreen: undefined;
};

export function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
}
