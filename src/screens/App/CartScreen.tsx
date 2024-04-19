import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Box, CartProducts, CustomButton } from '@/components';
import { useCarStore } from '@/contexts';
import { ProductProps } from '@/mock';
import { AppTabScreenProps } from '@/routes';
import { FormatCurrency } from '@/utils';

export function CartScreen({ navigation }: AppTabScreenProps<'CartScreen'>) {
  const { products, removeProduct } = useCarStore();

  function handleFinishOrder() {
    Alert.alert('Pedido finalizado', 'Seu pedido foi finalizado com sucesso', [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }

  function handleChooseTable() {
    console.log('Choose table');
    navigation.navigate('SelectTableScreen');
  }

  function handleRemoveProduct(product: ProductProps) {
    Alert.alert('Remover produto', `Deseja remover ${product.title} do carrinho?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => {
          removeProduct(product.id);
        },
      },
    ]);
  }

  return (
    <Box>
      <View className="mb-6 rounded-3xl bg-gray-1000/70 p-5">
        <Text className="text-md mb-3 font-bold text-white">Resumo do pedido</Text>

        {products.length > 0 ? (
          <View className="max-h-96">
            <ScrollView className="mb-5" showsVerticalScrollIndicator={false}>
              {products.map((product) => (
                <CartProducts
                  key={product.id}
                  data={product}
                  onPress={() => handleRemoveProduct(product)}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <Text className="font-body my-8 text-center text-slate-400">Seu carrinho está vazio</Text>
        )}

        <TouchableOpacity
          className="mb-3 flex-row items-center justify-between gap-x-3 border-b border-gray-subtitle pb-5"
          activeOpacity={0.7}
          onPress={handleChooseTable}>
          <Text className="font-heading text-lg text-white">Mesa</Text>

          <Text className="font-bold text-lg text-white">02</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between">
          <Text className="font-heading text-lg text-white">Total</Text>
          <Text className="font-bold text-base text-white">
            {FormatCurrency(products.reduce((acc, product) => acc + product.price, 0))}
          </Text>
        </View>
      </View>

      <View className="justify-center gap-y-3 rounded-3xl bg-gray-1000/70 p-5">
        <View className="flex-row justify-between">
          <Text className="text-lg text-white">Subtotal</Text>
          <Text className="font-bold text-lg text-white">
            {products.length > 0
              ? FormatCurrency(products.reduce((acc, product) => acc + product.price, 0))
              : '0.00'}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-lg text-white">Garçon</Text>
          <Text className="font-bold text-lg text-white">R$ 5.00</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-lg text-white">Total</Text>
          <Text className="font-bold text-lg text-white">
            {products.length > 0
              ? FormatCurrency(products.reduce((acc, product) => acc + product.price, 0) + 5)
              : '0.00'}
          </Text>
        </View>
      </View>

      <View className="mb-10 flex-1 justify-end px-7 pb-8">
        <CustomButton title="Finalizar pedido" onPress={handleFinishOrder} />
      </View>
    </Box>
  );
}
