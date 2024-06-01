import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';

import { Box, NofityCard } from '@/components';
import { AppScreenProps } from '@/routes';

export function NotifyScreen({ navigation }: AppScreenProps<'NotifyScreen'>) {
  function handleBack() {
    navigation.goBack();
  }

  function renderItem() {
    return <NofityCard table="1" time="Há 3 minutos" />;
  }

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
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={() => renderItem()}
      />
    </Box>
  );
}
