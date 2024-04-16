import React from 'react';
import { View } from 'react-native';

import { useAppSafeArea } from '@/hooks';
import { colors } from '@/theme/colors';

interface Props {
  children: React.ReactNode;
}

export function Box({ children }: Props) {
  const { top, bottom } = useAppSafeArea();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bg,
        paddingHorizontal: 20,
        paddingTop: top,
        paddingBottom: bottom,
      }}>
      {children}
    </View>
  );
}
