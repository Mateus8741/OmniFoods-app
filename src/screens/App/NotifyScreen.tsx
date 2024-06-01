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

  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 11 * 60 * 1000);

  const ordersCompleted = data?.data.filter((order) => {
    const updatedAtDate = order.updatedAt ? new Date(order.updatedAt) : null;
    return order.status === 'COMPLETED' && updatedAtDate && updatedAtDate >= oneHourAgo;
  });

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

      <FlatList
        data={ordersCompleted}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={
          <Text className="text-center font-bold text-xl text-gray-subtitle">
            Nenhum pedido pronto
          </Text>
        }
      />
    </Box>
  );
}
