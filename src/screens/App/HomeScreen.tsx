import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { FlatList, SectionList } from 'react-native';

import { Box, Header, Menu, MenuProducts, TextInput } from '@/components';
import { CATEGORIES, MENU, ProductProps } from '@/mock';
import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);

  const flatListRef = useRef<FlatList<string>>(null);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  function handleCategoryChange(newCategory: string) {
    setCurrentCategory(newCategory);

    const categoryIndex = CATEGORIES.findIndex((category) => category === newCategory);

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

  function handleProductPress(product: ProductProps) {
    navigation.navigate('ProductScreen', { product });
  }

  return (
    <Box>
      <Header
        hasNotification
        fullName="Mateus Tavares"
        urlImage="https://github.com/Mateus8741.png"
      />

      <TextInput
        placeholder="Buscar produtos"
        onChangeText={(text) => console.log(text)}
        rightComponent={<MaterialCommunityIcons name="magnify" size={20} color="white" />}
      />

      <Menu
        data={CATEGORIES}
        flatListRef={flatListRef}
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <MenuProducts
        MENU={MENU}
        sectionListRef={sectionListRef}
        onProductPress={(product) => handleProductPress(product)}
      />
    </Box>
  );
}
