import React, { useRef, useState } from 'react';
import { FlatList, SectionList } from 'react-native';

import { Box, Carousel, Header, Menu } from '@/components';
import { CATEGORIES, ProductProps } from '@/mock';
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

      {/* <FlatList
        ref={flatListRef}
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CatergoryButton
            title={item}
            isSelected={item === currentCategory}
            onPress={() => handleCategoryChange(item)}
          />
        )}
        horizontal
        className="mt-5 max-h-10"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      /> */}

      <Menu
        data={CATEGORIES}
        flatListRef={flatListRef}
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </Box>
  );
}
