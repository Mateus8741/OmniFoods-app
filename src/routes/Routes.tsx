import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AuthStack } from './AuthStack';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
