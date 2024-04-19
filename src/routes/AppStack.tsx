import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AppTabBottomTabParamList, AppTabNavigator } from './BottomTabsNavigation/AppTabNavigator';

import { ProductProps } from '@/mock';
import { ProductScreen, SelectTableScreen, SuccessScreen } from '@/screens';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  ProductScreen: { product: ProductProps };
  SelectTableScreen: undefined;
  SuccessScreen: undefined;
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="ProductScreen" component={ProductScreen} />
      <Screen
        name="SelectTableScreen"
        component={SelectTableScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal',
        }}
      />
      <Screen name="SuccessScreen" component={SuccessScreen} />
    </Navigator>
  );
}
