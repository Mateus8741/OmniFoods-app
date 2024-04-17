import React from 'react';
import { Text, View } from 'react-native';

import { Box } from '@/components';

export function LoginScreen() {
  return (
    <Box>
      <View className="mt-20 items-center gap-y-2">
        <Text className="font-bold text-3xl text-white">Bem vindo de volta!</Text>
        <Text className="font-bold text-base text-gray-subtitle">Entre na sua conta</Text>
      </View>
    </Box>
  );
}
