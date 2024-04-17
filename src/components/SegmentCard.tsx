import { Image, Text, View } from 'react-native';

type SegmentCardProps = {
  source: { uri: string };
  segment: string;
};

export function SegmentCard({ source, segment }: SegmentCardProps) {
  return (
    <View className="mb-5 w-36 items-center justify-end overflow-hidden rounded-3xl">
      <Image source={{ uri: source.uri }} className="h-[150px] w-full rounded-3xl" />

      <View className="absolute w-full items-center bg-black/50 p-2.5">
        <Text className="text-white">
          {segment.length > 20 ? `${segment.slice(0, 20)}...` : segment}
        </Text>
      </View>
    </View>
  );
}
