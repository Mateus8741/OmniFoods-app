import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { useAppSafeArea } from '@/hooks';
import { colors } from '@/theme/colors';

interface Props {
  children: React.ReactNode;
  scrollable?: boolean;
}

export function Box({ children, scrollable = true }: Props) {
  const { top, bottom } = useAppSafeArea();

  const Container = scrollable ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container
        style={{
          flex: 1,
          backgroundColor: colors.bg,
          paddingHorizontal: 20,
          paddingTop: top,
          paddingBottom: bottom,
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {children}
      </Container>
    </KeyboardAvoidingView>
  );
}
