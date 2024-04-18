import { FlatList } from 'react-native';

import { CatergoryButton } from './CategoryButton';

type MenuProps = {
  currentCategory: string;
  handleCategoryChange: (category: string) => void;
  flatListRef: React.RefObject<FlatList<string>>;
  data: string[];
};

export function Menu({ currentCategory, data, handleCategoryChange, flatListRef }: MenuProps) {
  return (
    <FlatList
      ref={flatListRef}
      data={data}
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
    />
  );
}
