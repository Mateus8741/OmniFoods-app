import { ActivityIndicator, View } from 'react-native';

import { colors } from '@/theme/colors';

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-bg">
      <ActivityIndicator size="large" color={colors.gray.subtitle} />
    </View>
  );
}
