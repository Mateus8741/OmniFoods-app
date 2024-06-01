import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';

import { useNotify } from '@/api/useCases/useNotify';
import { Box, NofityCard } from '@/components';
import { Order } from '@/models/OrderModel';
import { AppScreenProps } from '@/routes';
import { FormatDate } from '@/utils/formatDate';

export function NotifyScreen({ navigation }: AppScreenProps<'NotifyScreen'>) {
  const { data } = useNotify();

  function handleBack() {
    navigation.goBack();
  }

  function renderItem({ updatedAt, tableNumber }: Order) {
    return <NofityCard tableNumber={tableNumber} time={FormatDate(updatedAt as string)} />;
  }

  const ordersCompleted = data?.data.filter((order) => order.status === 'COMPLETED');

  return (
    <Box>
      <View className="mb-8 flex-row items-center justify-between border-b-2 border-gray-light pb-4">
        <Pressable
          onPress={handleBack}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-light">
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </Pressable>

        <Text className="font-bold text-2xl text-white">Notificações</Text>
      </View>

      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-xl text-gray-subtitle">Nenhuma pedido pronto</Text>
      </View>

      <FlatList
        data={ordersCompleted}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
      />
    </Box>
  );
}
