import React, { useRef, useState } from 'react';
import { FlatList, SectionList, Text } from 'react-native';

import { Box, Carousel, Header, Menu, Products } from '@/components';
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

  return (
    <Box>
      <Header hasNotification fullName="Mateus Tavares" />

      <Carousel />

      <Menu
        data={CATEGORIES}
        flatListRef={flatListRef}
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Products data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="mb-3 mt-8 font-heading text-xl text-white">{title}</Text>
        )}
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Box>
  );
}
