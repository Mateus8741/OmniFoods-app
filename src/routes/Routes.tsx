import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

import { useUserStorage } from '@/contexts/userStore';

export function Routes() {
  const { user } = useUserStorage();

  return <NavigationContainer>{user?.token ? <AppStack /> : <AuthStack />}</NavigationContainer>;
}
