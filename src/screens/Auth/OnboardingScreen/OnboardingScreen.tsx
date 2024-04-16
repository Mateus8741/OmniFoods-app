import React from 'react';
import { Image, Text, View } from 'react-native';

import { Box } from '@/components';

export function OnboardingScreen() {
  return (
    <Box>
      <View className="flex-col items-center justify-end">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={{ width: 120, height: 150 }}
          className="rounded-3xl"
        />

        <View className="absolute bg-black/50 p-2">
          <Text className="text-white">Onboarding</Text>
        </View>
      </View>
    </Box>
  );
}
