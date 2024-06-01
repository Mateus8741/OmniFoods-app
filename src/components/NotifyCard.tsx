import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface NotifyCardProps {
  tableNumber: number;
  time: string;
}

export function NofityCard({ tableNumber, time }: NotifyCardProps) {
  return (
    <View className="mb-4 flex-row items-center justify-start">
      <View className="w-full flex-row items-center justify-start gap-x-4 rounded-lg border-2 border-green-500 p-4">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
          <MaterialCommunityIcons name="check-all" size={24} color="white" />
        </View>

        <View className="flex-1 flex-row items-center justify-between">
          <Text className="font-bold text-xl text-white">Pedido mesa {tableNumber} pronto</Text>

          <Text className="font-bold text-sm text-white">{time}</Text>
        </View>
      </View>
    </View>
  );
}
