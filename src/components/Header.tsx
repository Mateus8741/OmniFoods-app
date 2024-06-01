import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

type HeaderProps = {
  fullName: string;
  hasNotification?: boolean;
  urlImage: string;
};

export function Header({ hasNotification, fullName, urlImage }: HeaderProps) {
  const { navigate } = useNavigation();

  function handleNotification() {
    navigate('NotifyScreen');
  }

  return (
    <View className="mb-8 flex-row items-center justify-between border-b-2 border-gray-light pb-6">
      <View className="flex-row items-center">
        <Image source={{ uri: urlImage }} className="h-12 w-12 rounded-full" resizeMode="cover" />

        <View className="ml-6 gap-y-1">
          <Text className="font-bold text-sm text-gray-subtitle">Funcionário</Text>

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
