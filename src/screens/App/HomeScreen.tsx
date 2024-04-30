import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { FlatList, Keyboard, SectionList } from 'react-native';

import { useGetAllProducts } from '@/api/useCases/useGetAllProducts';
import { Box, Header, Menu, MenuProducts, TextInput } from '@/components';
// import { CATEGORIES, MENU, ProductProps } from '@/mock';
import { Detail, Product } from '@/models/ProductModel';
import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { data } = useGetAllProducts();
  const CATEGORIES = data?.data.map((product) => product.title);

  const MENU = data?.data.map((product) => ({
    title: product.title,
    data: product.details,
  }));

  const [currentCategory, setCurrentCategory] = useState(CATEGORIES?.[0]);

  const [search, setSearch] = useState('');

  const flatListRef = useRef<FlatList<string>>(null);

  const sectionListRef = useRef<SectionList<Product>>(null);

  function handleCategoryChange(newCategory: string) {
    setCurrentCategory(newCategory);

    const categoryIndex = CATEGORIES?.findIndex((category) => category === newCategory) ?? -1;

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: categoryIndex,
      });
    }

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: categoryIndex,
        itemIndex: 0,
      });
    }
  }

  function handleProductPress(product: Detail) {
    navigation.navigate('ProductScreen', { product });
  }

  function handleClearSearch() {
    setSearch('');
    Keyboard.dismiss();
  }

  const filteredProducts = (MENU ?? []).filter((product) =>
    product.data.some((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Box>
      <Header
        hasNotification
        fullName="Mateus Tavares"
        urlImage="https://github.com/Mateus8741.png"
      />

      <TextInput
        placeholder="Buscar produtos"
        onChangeText={(text: React.SetStateAction<string>) => setSearch(text)}
        value={search}
        rightComponent={
          <MaterialCommunityIcons
            name={search ? 'close' : 'magnify'}
            size={20}
            color="white"
            onPress={search ? handleClearSearch : () => null}
          />
        }
      />

      <Menu
        data={CATEGORIES}
        flatListRef={flatListRef}
        currentCategory={currentCategory as string} // Fix: Add 'as string' to cast 'currentCategory' as string
        handleCategoryChange={handleCategoryChange}
      />

      <MenuProducts
        MENU={filteredProducts.map((product) => ({
          title: product.title,
          data: product.data.map((item) => ({
            ...item,
            title: item.name, // Assuming 'name' is the property that should be used as the title
          })),
        }))}
        sectionListRef={sectionListRef}
        onProductPress={(detail) => handleProductPress(detail)}
      />
    </Box>
  );
}
