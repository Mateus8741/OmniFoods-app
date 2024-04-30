import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AppTabBottomTabParamList, AppTabNavigator } from './BottomTabsNavigation/AppTabNavigator';

import { Detail } from '@/models/ProductModel';
import { ProductScreen, SelectTableScreen } from '@/screens';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  ProductScreen: { product: Detail };
  SelectTableScreen: undefined;
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
    </Navigator>
  );
}
