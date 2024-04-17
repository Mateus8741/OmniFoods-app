import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

export type SegmentProps = {
  source: { uri: string };
  segment: string;
};

type SegmentCardProps = TouchableOpacityProps & {
  data: SegmentProps;
};

export function SegmentCard({ data, ...rest }: SegmentCardProps) {
  return (
    <TouchableOpacity
      className="mb-5 w-36 items-center justify-end overflow-hidden rounded-3xl"
      activeOpacity={0.7}
      {...rest}>
      <Image source={{ uri: data.source.uri }} className="h-[150px] w-full rounded-3xl" />

      <View className="absolute w-full items-center bg-black/50 p-2.5">
        <Text className="text-white">
          {data.segment.length > 20 ? `${data.segment.slice(0, 20)}...` : data.segment}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
