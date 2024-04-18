import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

type HeaderProps = {
  fullName: string;
  hasNotification?: boolean;
};

export function Header({ hasNotification, fullName }: HeaderProps) {
  function handleNotification() {
    console.log('Notification');
  }

  return (
    <View className="mb-12 flex-row items-center justify-between border-b-2 border-gray-light pb-6">
      <View className="flex-row items-center">
        <Image
          source={{ uri: 'https://github.com/Mateus8741.png' }}
          className="h-12 w-12 rounded-full"
          resizeMode="cover"
        />

        <View className="ml-6 gap-y-1">
          <Text className="font-bold text-sm text-gray-subtitle">Entrega para</Text>

          <View className="flex-row">
            <Text className="font-bold text-base text-white">{fullName}</Text>
          </View>
        </View>
      </View>

      <Pressable onPress={handleNotification} className="relative">
        <MaterialCommunityIcons name="bell" size={24} color="white" />

        {hasNotification && (
          <View className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500" />
        )}
      </Pressable>
    </View>
  );
}
