import { useRef, useState } from 'react';
import { Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { useCreateOrder } from '@/api/useCases/useCreateOrder';
import { Box, CartProducts, CustomButton, TextInput } from '@/components';
import {
  CustomBottomSheet,
  MyBottonShetHandle,
} from '@/components/CustomBottomSheet/CustomBottomSheet';
import { useCarStore, useTableStorage } from '@/contexts';
import { useAppSafeArea } from '@/hooks';
import { Order } from '@/models/OrderModel';
import { Product } from '@/models/ProductModel';
import { AppTabScreenProps } from '@/routes';
import { FormatCurrency } from '@/utils';

export function CartScreen({ navigation }: AppTabScreenProps<'CartScreen'>) {
  const [changeToOrder, setChangeToOrder] = useState('');

  const { products, removeProduct, clearCart } = useCarStore();
  const { table, clearTable } = useTableStorage();
  const { top, bottom } = useAppSafeArea();

  const modalDescription = useRef<MyBottonShetHandle>(null);

  const modalSize = Dimensions.get('screen').height / 2 + bottom;

  const { mutate } = useCreateOrder(() => {
    Toast.show({
      type: 'success',
      text1: 'Pronto',
      text2: 'Pedido feito com sucesso!',
      topOffset: top,
    });

    clearCart();
    clearTable();
    navigation.navigate('HomeScreen');
  });

  function handleFinishOrder() {
    if (table) {
      modalDescription.current?.handleParentOpenBottonShet();
    } else {
      Alert.alert('Escolha uma mesa', 'Por favor, escolha uma mesa para finalizar o pedido.');
    }
  }

  function handleConfirmOrder() {
    if (table) {
      const order: Order = {
        productOrders: products.map((product) => ({
          productName: product.title,
          productPrice: product.price,
          quantity: product.quantity,
        })),

        tableNumber: Number(table?.value),
        changeToOrder,
        status: 'PENDING',
      };

      mutate(order);
      modalDescription.current?.handleParentCloseBottonShet();
      setChangeToOrder('');
    }
  }

  function handleChooseTable() {
    navigation.navigate('SelectTableScreen');
  }

  function handleRemoveProduct(product: Product) {
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
    <>
      <Box>
        {products.length !== 0 ? (
          <>
            <View className="mb-6 rounded-3xl bg-gray-1000/70 p-5">
              <View className="mb-5 flex-row items-center justify-between">
                <Text className="text-md font-bold text-white">Resumo do pedido</Text>

                <TouchableOpacity onPress={clearCart} hitSlop={10}>
                  <Text className="text-md font-bold text-red-500">Limpar carrinho</Text>
                </TouchableOpacity>
              </View>

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

              <TouchableOpacity
                className="mb-3 flex-row items-center justify-between gap-x-3 border-b border-gray-subtitle pb-5"
                activeOpacity={0.7}
                onPress={handleChooseTable}>
                {table ? (
                  <>
                    <Text className="text-lg text-white">Mesa</Text>
                    <Text className="font-bold text-lg text-white">{table.value}</Text>
                  </>
                ) : (
                  <Text className="font-bold text-lg text-white">Escolher mesa</Text>
                )}
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
                <Text className="font-bold text-lg text-white">R$ 1.50</Text>
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
          </>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="font-bold text-3xl text-white">Sem pedidos</Text>
          </View>
        )}
      </Box>

      <CustomBottomSheet ref={modalDescription} height={modalSize} scrollable>
        <TextInput
          placeholder="Algo a acressentar?"
          onChangeText={(text: React.SetStateAction<string>) => setChangeToOrder(text)}
          value={changeToOrder}
        />

        <View className="rounded-2xl border border-gray-500">
          <CustomButton title="Confirmar pedido" onPress={handleConfirmOrder} />
        </View>
      </CustomBottomSheet>
    </>
  );
}
