import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AppStack } from './AppStack';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
