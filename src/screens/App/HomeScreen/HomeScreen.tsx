import React from 'react';

import { Box, Header } from '@/components';
import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Box>
      <Header hasNotification fullName="Mateus Tavares" />
    </Box>
  );
}
