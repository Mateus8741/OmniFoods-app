import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

import { Box, CustomButton } from '@/components';
import { AppScreenProps } from '@/routes';
import { FormatCurrency } from '@/utils';

export function ProductScreen({ route, navigation }: AppScreenProps<'ProductScreen'>) {
  const { product } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Box>
      <View className="relative">
        <Pressable
          onPress={handleGoBack}
          className="absolute left-3 top-2 z-10 rounded-full bg-gray-900/35 p-2">
          <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
        </Pressable>

        <Image source={product.cover} className="h-52 w-full rounded-md" resizeMode="cover" />
      </View>

      <View className="mt-8 flex-1">
        <Text className="font-heading text-xl text-white">{product.title}</Text>

        <Text className="my-2 font-heading text-2xl text-lime-400">
          {FormatCurrency(product.price)}
        </Text>
        <Text className="font-body mb-6 text-base leading-6 text-gray-300">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient) => (
          <Text key={ingredient} className="font-body text-base leading-6 text-gray-300">
            {'\u2022'}
            {ingredient}
          </Text>
        ))}
      </View>

      <View className="gap-5 p-5 pb-8">
        <CustomButton title="Adicionar ao carrinho" />

        {/* <LinkButton href="/" title="Ver carrinho" /> */}
      </View>
    </Box>
  );
}
