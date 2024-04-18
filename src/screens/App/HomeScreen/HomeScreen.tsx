import React from 'react';

import { Box, Carousel, Header } from '@/components';
import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Box>
      <Header hasNotification fullName="Mateus Tavares" />

      <Carousel />
    </Box>
  );
}
