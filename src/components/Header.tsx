import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

import Logo from '../assets/Logo.png';

import { useUserStorage } from '@/contexts/userStore';

export function Header() {
  const { navigate } = useNavigation();
  const { user } = useUserStorage();

  function handleNotification() {
    navigate('NotifyScreen');
  }

  return (
    <View className="mb-8 flex-row items-center justify-between border-b-2 border-gray-light pb-6">
      <View className="flex-row items-center">
        <Image source={Logo} className="h-12 w-12 rounded-full" resizeMode="contain" />

        <View className="ml-6 gap-y-1">
          <Text className="font-bold text-sm text-gray-subtitle">Comanda Eletrônica</Text>

          <View className="flex-row">
            <Text className="font-bold text-base text-white">{user?.email}</Text>
          </View>
        </View>
      </View>

      <Pressable onPress={handleNotification} className="relative">
        <MaterialCommunityIcons name="bell" size={24} color="white" />

        {/* <View className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500" /> */}
      </Pressable>
    </View>
  );
}
