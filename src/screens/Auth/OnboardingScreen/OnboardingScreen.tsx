import React from 'react';
import { View } from 'react-native';

import { Box, SegmentCard, SegmentProps } from '@/components';
import { useSegmentStorage } from '@/contexts';

const segments = [
  { id: 1, segment: 'Pedir comida', source: { uri: 'https://picsum.photos/500/300' } },
  { id: 2, segment: 'Retirada', source: { uri: 'https://picsum.photos/500/200' } },
  { id: 3, segment: 'Reservar mesa', source: { uri: 'https://picsum.photos/500/500' } },
  { id: 4, segment: 'Rotina alimentar', source: { uri: 'https://picsum.photos/500/400' } },
  { id: 5, segment: 'Refeições', source: { uri: 'https://picsum.photos/500/700' } },
];

export function OnboardingScreen() {
  const { setSegment } = useSegmentStorage();

  function handleSegmentPress({ segment }: SegmentProps) {
    setSegment(segment);
  }

  return (
    <Box>
      <View className="flex-row flex-wrap items-center justify-around">
        {segments.map((item) => (
          <SegmentCard key={item.id} data={item} onPress={() => handleSegmentPress(item)} />
        ))}
      </View>
    </Box>
  );
}
