import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

import Logo from '../assets/Logo.png';

import { useNotify } from '@/api/useCases/useNotify';
import { useUserStorage } from '@/contexts/userStore';

export function Header() {
  const { navigate } = useNavigation();
  const { user, removeUser } = useUserStorage();
  const { data } = useNotify();

  function handleNotification() {
    navigate('NotifyScreen');
  }

  function logOut() {
    removeUser();
  }

  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 11 * 60 * 1000);

  const ordersCompleted = data?.data.filter((order) => {
    const updatedAtDate = order.updatedAt ? new Date(order.updatedAt) : null;
    return order.status === 'COMPLETED' && updatedAtDate && updatedAtDate >= oneHourAgo;
  });

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

      <View className="flex-row items-center gap-x-9">
        <Pressable hitSlop={10} onPress={logOut}>
          <MaterialCommunityIcons name="logout" size={24} color="white" />
        </Pressable>

        <Pressable onPress={handleNotification} className="relative" hitSlop={10}>
          <MaterialCommunityIcons name="bell" size={24} color="white" />

          {ordersCompleted?.length ? (
            <View className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
              <Text className="font-bold text-xs text-white">{ordersCompleted?.length}</Text>
            </View>
          ) : null}
        </Pressable>
      </View>
    </View>
  );
}
