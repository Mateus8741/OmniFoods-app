import { useState } from 'react';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';

import { Box, CustomButton } from '@/components';
import { useTableStorage } from '@/contexts';
import { TableMockProps, tables } from '@/mock';
import { AppScreenProps } from '@/routes';
import { colors } from '@/theme/colors';

export function SelectTableScreen({ navigation }: AppScreenProps<'SelectTableScreen'>) {
  const [selectedTable, setSelectedTable] = useState<TableMockProps>({} as TableMockProps);

  const { setTable } = useTableStorage();

  function handleConfirmTable() {
    if (selectedTable) {
      navigation.goBack();
      setTable(selectedTable);
    }
  }

  return (
    <Box>
      <Text className="mb-8 text-center text-3xl text-white">Selecione a mesa</Text>

      <View className="flex-1 flex-row flex-wrap justify-center">
        {tables.map((item) => (
          <View key={item.id} className="h-20 w-20 items-center justify-center p-3">
            <BouncyCheckbox
              text={item.value}
              size={30}
              unFillColor="transparent"
              fillColor={
                selectedTable && selectedTable.id === item.id
                  ? colors.green.success
                  : colors.gray.subtitle
              }
              textStyle={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: -10,
                direction: 'ltr',
              }}
              isChecked={selectedTable === item}
              onPress={() => setSelectedTable(item)}
            />
          </View>
        ))}
      </View>

      <CustomButton title="Confirmar" onPress={handleConfirmTable} />
    </Box>
  );
}
