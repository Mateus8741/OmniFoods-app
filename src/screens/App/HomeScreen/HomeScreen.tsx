import React from 'react';
import { Text, View } from 'react-native';

import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <>
      <View className="flex-1 flex-row flex-wrap justify-between">
        <Text>asdas</Text>
      </View>
    </>
  );
}
