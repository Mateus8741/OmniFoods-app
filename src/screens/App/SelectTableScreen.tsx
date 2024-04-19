import { useState } from 'react';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';

import { tables } from '@/mock';
import { colors } from '@/theme/colors';

export function SelectTableScreen() {
  const [selectedTable, setSelectedTable] = useState<any>();

  console.log(selectedTable);

  return (
    <View className="flex-1 items-center bg-bg px-5 pt-7">
      <Text className="mb-8 text-center text-3xl text-white">Selecione a mesa</Text>

      <View className="flex-row flex-wrap justify-center">
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
    </View>
  );
}
